"use client";
import { useForm, SubmitHandler } from "react-hook-form";
type FormValues = {
  Name: string;
  email: string;
  studentId: string;
  phoneNumber: string;
  gender: "Male" | "Female" | "Other";
  branch:
    | "AIML"
    | "CE"
    | "CSE"
    | "CSE-AIML"
    | "CSE-DS"
    | "CSE-Hindi"
    | "CS"
    | "CSIT"
    | "ECE"
    | "EN"
    | "IT"
    | "ME";

  Residency: "Hosteller" | "Day scholar";
  section:
    | "S1"
    | "S2"
    | "S3"
    | "S4"
    | "S5"
    | "S6"
    | "S7"
    | "S8"
    | "S9"
    | "S10"
    | "S11"
    | "S12"
    | "S13"
    | "S14"
    | "S15"
    | "S16"
    | "S17"
    | "S18"
    | "S19"
    | "S20";
};

export function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <section className="bg-white min-h-screen">
      <div className="md:px-8 py-4 mx-auto leading-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="font-work-sans font-semibold text-xl w-[80%] mx-auto"
        >
          <h1 className="vision-head text-center mt-4">VISION</h1>
          <div className="mt-8">
            <label htmlFor="name" className="block mb-1 text-sm col-12">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="md:h-10 w-full rounded-md border text-black  border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="Email" className="block mb-1 text-sm">
              College Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="@akgec.ac.in"
              className="md:h-10 w-full rounded-md border text-black  border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="PhoneNumber" className="block mb-1 text-sm">
              Phone Number
            </label>
            <input
              type="text"
              id="PhoneNumber"
              placeholder="Phone Number"
              className="md:h-10 w-full rounded-md border text-black border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="studentNumber" className="block mb-1 text-sm">
              Student Number
            </label>
            <input
              type="text"
              id="studentNumber"
              placeholder="student Number"
              className="h-10 w-full rounded-md border text-black border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="flex space-x-4 w-full">
            <div className="mt-4 w-1/2">
              <label htmlFor="Section" className="block mb-1 text-sm">
                Section
              </label>
              <select
                id="Section"
                className="md:h-10 block w-full rounded-md border text-black border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option className="w-full">Select Section </option>

                <option value="S1">S1</option>
                <option value="S2">S2</option>
                <option value="S3">S3</option>
                <option value="S4">S4</option>
                <option value="S5">S5</option>
                <option value="S6">S6</option>
                <option value="S7">S7</option>
                <option value="S8">S8</option>
                <option value="S9">S9</option>
                <option value="S10">S10</option>
                <option value="S11">S11</option>
                <option value="S12">S12</option>
                <option value="S13">S13</option>
                <option value="S14">S14</option>
                <option value="S15">S15</option>
                <option value="S16">S16</option>
                <option value="S17">S17</option>
                <option value="S18">S18</option>
                <option value="S19">S19</option>
                <option value="S20">S20</option>
              </select>
            </div>{" "}
            <div className="mt-4 w-1/2">
              <label htmlFor="Branch" className="block mb-1 text-sm">
                Branch
              </label>
              <select
                id="Branch"
                className="md:h-10 block w-full rounded-md border text-black border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option>Select Branch</option>
                <option value="AIML">AIML</option>
                <option value="CE">CE</option>
                <option value="CSE">CSE</option>
                <option value="CSE-AIML">CSE-AIML</option>
                <option value="CSE-DS">CSE-DS</option>
                <option value="CSE-Hindi">CSE-Hindi</option>
                <option value="CS">CS</option>
                <option value="CSIT">CSIT</option>
                <option value="ECE">ECE</option>
                <option value="EN">EN</option>
                <option value="IT">IT</option>
                <option value="ME">ME</option>
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
                className="md:h-10 block w-full rounded-md border text-black border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option>Select Gender </option>
                <option value="Male"> Male</option>

                <option value="Female"> Female</option>
                <option value="Other">Other</option>
              </select>
            </div>{" "}
            <div className="mt-4 w-1/2">
              <label htmlFor="Hosteller" className="block mb-1 text-sm">
                Hosteller
              </label>
              <select
                id="Hostellers"
                className="md:h-10 w-full rounded-md border text-black border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:text-base focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#6a0376] hover:bg-pink-600 text-white font-normal py-2 px-4 w-full mt-6 rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
}
