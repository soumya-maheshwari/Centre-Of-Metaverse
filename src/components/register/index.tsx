"use client";
import { useForm, SubmitHandler, useFormState } from "react-hook-form";
import { TracingBeam } from "@/components";
import { useMemo, useRef } from "react";
import { FormValues } from "@/type";
import { register as registerForm } from "@/actions";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";

export function RegistrationForm() {
  const captchaRef = useRef<TurnstileInstance>(null);

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
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

     alert("Registration successful");
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

  return (
    <TracingBeam className="px-6">
      <section className="min-h-screen flex">
        <div className="bg-black w-1/3 h-full"></div>
        <div className="bg-white md:px-8 py-4 mx-auto leading-10 w-3/4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="font-work-sans font-semibold text-xl w-[80%] mx-auto"
          >
            <h1 className="vision-head text-center mt-4 font-bungeeInline">
              VISION
            </h1>
            <div className="mt-8">
              <label htmlFor="name" className="block mb-1 text-sm col-12">
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
                className="md:h-10 w-full rounded-md border text-black  border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              />
              {errors.name && (
                <span className="text-red-500 text-xs">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="mt-4">
              <label htmlFor="Email" className="block mb-1 text-sm">
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
                className="md:h-10 w-full rounded-md border text-black  border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="mt-4">
              <label htmlFor="PhoneNumber" className="block mb-1 text-sm">
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
                className="md:h-10 w-full rounded-md border text-black border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              />
              {errors.phoneNumber && (
                <span className="text-red-500 text-xs">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>

            <div className="mt-4">
              <label htmlFor="studentNumber" className="block mb-1 text-sm">
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
                className="h-10 w-full rounded-md border text-black border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              />
              {errors.studentId && (
                <span className="text-red-500 text-xs">
                  {errors.studentId.message}
                </span>
              )}
            </div>

            <div className="flex space-x-4 w-full">
              <div className="mt-4 w-1/2">
                <label htmlFor="Section" className="block mb-1 text-sm">
                  Section
                </label>
                <select
                  id="Section"
                  {...register("section", { required: true })}
                  className="md:h-10 block w-full rounded-md border text-black border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {sections.map((section, index) => (
                    <option key={index} value={section}>
                      {section}
                    </option>
                  ))}
                </select>
              </div>{" "}
              <div className="mt-4 w-1/2">
                <label htmlFor="Branch" className="block mb-1 text-sm">
                  Branch
                </label>
                <select
                  id="Branch"
                  {...register("branch", { required: true })}
                  className="md:h-10 block w-full rounded-md border text-black border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
                <label htmlFor="Gender" className="block mb-1 text-sm">
                  Gender
                </label>
                <select
                  id="Gender"
                  {...register("gender")}
                  className="md:h-10 block w-full rounded-md border text-black border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="Male"> Male</option>
                  <option value="Female"> Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mt-4 w-1/2">
                <label htmlFor="Hosteller" className="block mb-1 text-sm">
                  Hosteler
                </label>
                <select
                  {...register("residency", { required: true })}
                  id="Hostellers"
                  className="md:h-10 w-full rounded-md border text-black border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
            <button
              type="submit"
              className="bg-[#de17ce] hover:bg-[#c413b5] text-white font-normal py-2 px-4 w-full mt-6 rounded-md"
            >
              Register
            </button>
          </form>
        </div>
      </section>
    </TracingBeam>
  );
}
