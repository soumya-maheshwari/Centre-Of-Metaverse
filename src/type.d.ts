export interface WorkCard {
    title: string;
    desc: string;
    img: string;
    splineUrl: string;
    thumb: string;
}


export type FormValues = {
    name: string;
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
  
    residency: "Hosteller" | "Day scholar";
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
    captchaToken: string;
  };
  