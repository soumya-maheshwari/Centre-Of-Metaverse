"use client";
import { useForm, SubmitHandler, useFormState } from "react-hook-form";
import { TracingBeam } from "@/components";
import { ChangeEvent, useMemo, useRef } from "react";
import { FormValues } from "@/type";
import { register as registerForm } from "@/actions";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import {motion} from 'framer-motion'

export function RegistrationForm() {
  const captchaRef = useRef<TurnstileInstance>(null);



  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      captchaToken: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (captchaRef.current?.getResponse() === "") {
      alert("Please verify you are not a robot");
      return;
    }

    captchaRef.current?.reset();

    const res = await registerForm(data);

    if (res?.error) {
      alert(res.error.message);
      return;
    }
    if (!res?.error) {
      alert("Registered Successfully");
    }

    // reset form
    reset();
  };

  const numberOfFieldsFilled = Object.values(getValues());

  const sections = useMemo(
    () => [
      "S1",
      "S2",
      "S3",
      "S4",
      "S5",
      "S6",
      "S7",
      "S8",
      "S9",
      "S10",
      "S11",
      "S12",
      "S13",
      "S14",
      "S15",
      "S16",
      "S17",
      "S18",
      "S19",
      "S20",
    ],
    []
  );

  const branches = useMemo(
    () => [
      "AIML",
      "CE",
      "CSE",
      "CSE-AIML",
      "CSE-DS",
      "CSE-Hindi",
      "CS",
      "CSIT",
      "ECE",
      "EN",
      "IT",
      "ME",
    ],
    []
  );

  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("firstName", event.target?.value);
    setValue("name", `${event.target?.value} ${getValues("lastName")}`);
  };

  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("lastName", event.target?.value);
    setValue("name", `${getValues("firstName")} ${event.target?.value}`);
  };

  return (
      <section className="min-h-screen flex">
        <div className="bg-black w-1/3 h-full"></div>
        <div className="bg-white md:px-8 py-4 mx-auto leading-10 w-3/4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="font-work-sans font-semibold text-xl w-[80%] mx-auto"
          >
            <h1 className="mt-4 text-black text-[2.5rem]">
              Enter Your Details
            </h1>

            {/* Name */}
            <div className="mt-8 flex gap-8 justify-between">
              <div className="w-full">
                <label htmlFor="name" className="block text-sm col-12">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                    minLength: {
                      value: 3,
                      message: "Name should be atleast 3 characters",
                    },
                    validate: {
                      value: (value) => !!value.trim(),
                      message: (value) =>
                        value.trim() ? "" : "Name cannot be empty",
                    },
                  })}
                  onChange={handleFirstName}
                  className="form-field"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="lastName" className="block text-sm col-12">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  {...register("lastName")}
                  onChange={handleLastName}
                  className="form-field"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="Email" className="block text-sm">
                College Email
              </label>
              <input
                type="text"
                id="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@akgec\.ac\.in/,
                    message: "Please enter a valid college email",
                  },
                })}
                placeholder="@akgec.ac.in"
                className="form-field"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="mt-4">
              <label htmlFor="PhoneNumber" className="block text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                id="PhoneNumber"
                placeholder="Phone Number"
                {...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "Phone number is required",
                  },
                  pattern: {
                    value: /^(?:\+91)?\d{10}$/,
                    message: "Please enter a valid phone number",
                  },
                })}
                className="form-field"
              />
              {errors.phoneNumber && (
                <span className="text-red-500 text-xs">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>

            <div className="mt-4">
              <label htmlFor="studentNumber" className="block text-sm">
                Student Number
              </label>
              <input
                type="text"
                id="studentNumber"
                {...register("studentId", {
                  required: {
                    value: true,
                    message: "Student number is required",
                  },
                  minLength: {
                    value: 5,
                    message: "Enter a valid student number",
                  },
                })}
                placeholder="student Number"
                className="form-field"
              />
              {errors.studentId && (
                <span className="text-red-500 text-xs">
                  {errors.studentId.message}
                </span>
              )}
            </div>

            <div className="flex space-x-4 w-full">
              <div className="mt-4 w-1/2">
                <label htmlFor="Section" className="block text-sm">
                  Section
                </label>
                <select
                  id="Section"
                  {...register("section", { required: true })}
                  className="form-field"
                >
                  {sections.map((section, index) => (
                    <option key={index} value={section}>
                      {section}
                    </option>
                  ))}
                </select>
              </div>{" "}
              <div className="mt-4 w-1/2">
                <label htmlFor="Branch" className="block text-sm">
                  Branch
                </label>
                <select
                  id="Branch"
                  {...register("branch", { required: true })}
                  className="form-field"
                >
                  {branches.map((branch, index) => (
                    <option key={index} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex space-x-4 w-full">
              <div className="mt-4 w-1/2">
                <label htmlFor="Gender" className="block text-sm">
                  Gender
                </label>
                <select
                  id="Gender"
                  {...register("gender")}
                  className="form-field"
                >
                  <option value="Male"> Male</option>
                  <option value="Female"> Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mt-4 w-1/2">
                <label htmlFor="Hosteller" className="block text-sm">
                  Hosteler
                </label>
                <select
                  {...register("residency", { required: true })}
                  id="Hostellers"
                  className="form-field"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""}
              options={{
                theme: "light",
              }}
              onSuccess={(token) => {
                setValue("captchaToken", token);
              }}
              ref={captchaRef}
              className="mt-4 rounded-e-lg"
            />
            <motion.button
              type="submit"
              className="bg-[#de17ce] hover:bg-[#c413b5] text-white font-normal py-2 px-4 w-full mt-6 rounded-full font-work-sans"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Register
            </motion.button>
          </form>
        </div>
      </section>
  );
}
