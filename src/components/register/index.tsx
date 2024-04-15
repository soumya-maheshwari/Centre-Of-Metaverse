"use client";
import { useForm, SubmitHandler, useFormState } from "react-hook-form";
import { TracingBeam } from "@/components";
import { ChangeEvent, useEffect, useMemo, useRef } from "react";
import { FormValues } from "@/type";
import { register as registerForm } from "@/actions";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { motion } from "framer-motion";
import Image from "next/image";
import { isValidEmail, isValidStudentNumber } from "@/utils/validations";

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
    setError,
  } = useForm<FormValues>({
    defaultValues: {
      captchaToken: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const studentId = data.studentId;

    const regexExpEmail = `^[a-zA-Z]+(${studentId})@akgec.ac.in$`;
    const re = new RegExp(regexExpEmail);

    if (!re.test(data.email)) {
      setError("studentId", {
        type: "manual",
        message: `Student number does not match with the provided email`,
      });

      return;
    }

    if (captchaRef.current?.getResponse() === "") {
      alert("Please verify you are not a robot");
      return;
    }

    console.log(errors.email);

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

  const handleStudentId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("studentId", event.target?.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("email", event.target?.value);
  };

  return (
    <section className="min-h-screen flex">
      <div className="bg-black w-1/3 h-full p-8 hidden md:block">
        <Image
          src="/Logo-lg.svg"
          alt="Centre of Metaverse"
          width={200}
          height={200}
          className=" my-2"
        />

        <h1 className="text-white text-3xl font-bold mt-12 font-futura">
          Register Now for the <br /> Metaverse Experience{" "}
        </h1>

        <p className="mt-12 font-work-sans text-[#E9E9E9] text-xl font-normal">
          {" "}
          Register now for the upcoming event organised by the Centre Of
          Metaverse AKGEC{" "}
        </p>

        <video
          className="mt-12 w-full rounded-3xl"
          loop
          muted
          preload="auto"
          autoPlay
          width={300}
          poster="/meta-thumb.png"
        >
          <source src="/vids/meta.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="bg-white md:px-8 py-4 mx-auto leading-10 md:w-3/4 w-full">
        <div className="bg-black py-3 md:py-0 -mt-4">
          <Image
            src="/Logo-lg.svg"
            alt="Centre of Metaverse"
            width={200}
            height={200}
            className=" my-2 mx-auto md:hidden"
          />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="font-work-sans font-semibold text-xl w-[80%] mx-auto"
        >
          <h1 className="vision-head text-center mt-4 font-bungeeInline p-2 md:p-7 md:text-7xl text-6xl ">
            VISION
          </h1>

          {/* Name */}
          <div className="mt-8 flex gap-8 justify-between flex-col sm:flex-row">
            <div className="w-full">
              <label htmlFor="name" className="block text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Name should be atleast 3 characters",
                  },
                })}
                className="form-field"
              />
              {errors.name && (
                <span className="text-red-500 text-xs">
                  {errors.name.message}
                </span>
              )}
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
                // validate: (value) => isValidEmail(value) || "Invalid Email Id",
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
                validate: (value) =>
                  isValidStudentNumber(value) || "Invalid student number",
              })}
              placeholder="Student Number"
              className="form-field"
              onChange={handleStudentId}
            />
            {errors.studentId && (
              <span className="text-red-500 text-xs">
                {errors.studentId.message}
              </span>
            )}
          </div>

          <div className="flex sm:space-x-4 w-full flex-col sm:flex-row">
            <div className="mt-4 sm:w-1/2 w-full">
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
            <div className="mt-4 sm:w-1/2 w-full">
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

          <div className="flex sm:space-x-4 w-full  flex-col sm:flex-row">
            <div className="mt-4 sm:w-1/2 w-full">
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
            <div className="mt-4 sm:w-1/2 w-full">
              <label htmlFor="residency" className="block text-sm">
                Residency
              </label>
              <select
                {...register("residency", { required: true })}
                id="Hostellers"
                className="form-field"
              >
                <option value="Hosteller">Hosteller</option>
                <option value="Day Scholar">Day Scholar</option>
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
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </form>
      </div>
    </section>
  );
}
