"use client";
import { useForm, SubmitHandler } from "react-hook-form";
type FormValues = {
  firstName: string;
  lastName?: string;
  email: string;
  studentId: string;
  phoneNumber: string;
  year: string;
  branch:
    | "CSE"
    | "CSE-DS"
    | "CSE-AIML"
    | "AIML"
    | "CSIT"
    | "IT"
    | "CSE-Hindi"
    | "CS"
    | "ECE"
    | "ME"
    | "CE"
    | "EN";
  isHosteler: boolean;
  section: string;
};
export function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <section className="">
      <div></div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input {...register("firstName", { required: true })} />
                {errors.firstName && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input {...register("lastName")} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <span>Please enter a valid email address</span>}
            </div>
            <div>
                <label htmlFor="studentId">Student ID</label>
                <input {...register("studentId", { required: true })} />
                {errors.studentId && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input {...register("phoneNumber", { required: true })} />
                {errors.phoneNumber && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="year">Year</label>
                <input {...register("year", { required: true })} />
                {errors.year && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="branch">Branch</label>
                <select {...register("branch", { required: true })}>
                    <option value="CSE">CSE</option>
                    <option value="CSE-DS">CSE-DS</option>
                    <option value="CSE-AIML">CSE-AIML</option>
                    <option value="AIML">AIML</option>
                    <option value="CSIT">CSIT</option>
                    <option value="IT">IT</option>
                    <option value="CSE-Hindi">CSE-Hindi</option>
                    <option value="CS">CS</option>
                    <option value="ECE">ECE</option>
                    <option value="ME">ME</option>
                    <option value="CE">CE</option>
                    <option value="EN">EN</option>
                </select>
                {errors.branch && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="isHosteler">Is Hosteler?</label>
                <input type="checkbox" {...register("isHosteler")} />
            </div>
            <div>
                <label htmlFor="section">Section</label>
                <input {...register("section", { required: true })} />
                {errors.section && <span>This field is required</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
