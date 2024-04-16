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
      body: JSON.stringify({
        to: data.email,
        subjet: "Welcome Aboard! Your Registration for Vision is Confirmed",
        html: `
        <p>Hello ${data.name},</p>
        <p>We are thrilled to have you on board for our upcoming AR/VR workshop! Your registration has been successfully processed, and we're excited to have you join us in exploring the boundless possibilities of augmented and virtual reality.</p>
        <p>At our workshop, you will have the opportunity to dive deep into the latest advancements in AR and VR technologies and engage in hands-on activities that will help you unlock your potential in this dynamic field.</p>
        <p>During the workshop, you can expect to:</p>
        <ul>
          <li>Gain a comprehensive understanding of the core principles and applications of AR and VR</li>
          <li>Explore cutting-edge hardware and software solutions used in the industry</li>
          <li>Participate in interactive sessions and workshops to hone your skills</li>
          <li>Network with like-minded individuals and connect with potential mentors</li>
          <li>Receive guidance on how to turn your AR/VR ideas into reality</li>
        </ul>
        <p>We're confident that this workshop will be a transformative experience that will equip you with the knowledge and skills to thrive in the ever-evolving world of AR and VR.</p>
        <p>Even if you don't know anything about AR/VR, don't worry. We will be there to help you out at every step. We look forward to seeing you at the workshop and can't wait to witness the incredible potential you'll unlock. If you have any questions or concerns, please don't hesitate to reach out to our team (https://www.instagram.com/centre.of.metaverse/). We will try to resolve your queries as soon as possible.</p>
        <p>Best regards,</p>
        <p>Team C.O.M</p>
        `,
      }),
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
