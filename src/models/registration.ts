import { FormValues } from "@/type";
import { Model, Schema, model, models, Document } from "mongoose";

interface RegistrationSchema
  extends Required<Omit<FormValues, "captchaToken">>,
    Document {}

const registrationSchema = new Schema<RegistrationSchema>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  residency: {
    type: String,
    required: true,
  },
});

export const Registration: Model<RegistrationSchema> =
  models.Registration || model("Registration", registrationSchema);
