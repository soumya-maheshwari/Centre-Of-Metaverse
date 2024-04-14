"use server";
import { headers } from "next/headers";

import { FormValues } from "@/type";
import { connectToDB } from "@/libs";
import { Registration } from "@/models";

export const register = async (data: FormValues) => {
  if (!data.captchaToken) {
    return {
      error: {
        message: "Recaptcha token is required",
      },
    };
  }

  // validate data
  if (!data.name) {
    return {
      error: {
        message: "Name is required",
      },
    };
  }

  if (!data.email) {
    return {
      error: {
        message: "Email is required",
      },
    };
  }

  if (!data.studentId) {
    return {
      error: {
        message: "Student ID is required",
      },
    };
  }

  if (!data.phoneNumber) {
    return {
      error: {
        message: "Phone number is required",
      },
    };
  }

  if (!data.branch) {
    return {
      error: {
        message: "Branch is required",
      },
    };
  }

  if (!data.gender) {
    return {
      error: {
        message: "Gender is required",
      },
    };
  }

  if (!data.residency) {
    return {
      error: {
        message: "Residency is required",
      },
    };
  }

  if (!data.section) {
    return {
      error: {
        message: "Section is required",
      },
    };
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${data.captchaToken}`,
      }
    );

    const json = await response.json();

    const { success } = json;

    if (!success) {
      return {
        error: {
          message: "Captcha verification failed",
        },
      };
    }

    // save to database
    const db = await connectToDB();

    console.log("DB", db?.readyState);

    const isRegistered = await Registration.findOne({ email: data.email });

    if (isRegistered) {
      return {
        error: {
          message: "You have already registered",
        },
      };
    }

    const { captchaToken, ...registrationData } = data;

    const registration = await Registration.create(registrationData);
    await registration.save();

    const saveToSheet = await fetch(process.env.SHEET_WEBHOOK_URL ?? "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationData),
    });

    const sendEmail = await fetch(process.env.EMAIL_WEBHOOK_URL ?? "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationData),
    });

    return {
      error: null,
      data: {
        message: "Registration successful",
      },
    };
  } catch (error) {
    console.log(error);
    return {
      error: {
        message: "Something went wrong",
      },
    };
  }
};
