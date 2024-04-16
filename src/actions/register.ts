"use server";

import { FormValues } from "@/type";
import { connectToDB } from "@/libs";
import { Registration } from "@/models";
import {
  isValidEmail,
  isValidPhoneNumber,
  isValidStudentNumber,
} from "@/utils/validations";
import { branches, sections } from "@/constants";

const validateField = (fieldName: string, value: any, validationFn: Function) => {
  if (!value) {
    throw new Error(`${fieldName} is required`);
  } else if (!validationFn(value)) {
    throw new Error(`Invalid ${fieldName}`);
  }
};

export const register = async (data: FormValues) => {
  try {
    // Validate required fields
    validateField("Captcha token", data.captchaToken, (token: string) => token !== undefined);
    validateField("Name", data.name, (name: string) => name !== undefined);
    validateField("Email", data.email, isValidEmail);
    validateField("Student ID", data.studentId, isValidStudentNumber);
    validateField("Phone number", data.phoneNumber, isValidPhoneNumber);
    validateField("Branch", data.branch, (branch: string) => branches.includes(branch));
    validateField("Gender", data.gender, (gender: string) => gender !== undefined);
    validateField("Residency", data.residency, (residency: string) => residency !== undefined);
    validateField("Section", data.section, (section: string) => sections.includes(section));

    // Validate captcha token
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${data.captchaToken}`,
    });
    const json = await response.json();
    const { success } = json;
    if (!success) {
      throw new Error("Invalid captcha token");
    }

    // Save to database
    const db = await connectToDB();
    const isRegistered = await Registration.findOne({ email: data.email });
    if (isRegistered) {
      throw new Error("Email already registered");
    }
    const { captchaToken, ...registrationData } = data;
    const registration = await Registration.create(registrationData);
    await registration.save();

    // Save to Google Sheet
    const saveToSheet = await fetch(process.env.SHEET_WEBHOOK_URL ?? "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...registrationData,time:new Date().toLocaleString()}),
    });

    // Send email
    const sendEmail = await fetch(process.env.EMAIL_WEBHOOK_URL ?? "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: data.email,
        subject: "Registration successful",
        html:`<h1>Registration successful</h1>`,
      }),
    });

    console.log("Email sent", sendEmail);

    return {
      error: null,
      data: {
        message: "Registration successful",
      },
      success: true,
    };
  } catch (error:any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
