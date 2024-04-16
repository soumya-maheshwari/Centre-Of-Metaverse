import Image from "next/image";
import React from "react";

const Faculty = () => {
  const faculties = [
    {
      id: 1,
      name: "Mr. Pancham Singh",
      role: "(Assistant Professor)",
      photoUrl: "./pancham.png",
    },
    {
      id: 2,
      name: "Prof. Rahul Sharma",
      role: "(HOD)",
      photoUrl: "./HOD.png",
    },
  ];

  return (
    <div className="w-[94%] p-1 sm:px-24 mx-auto mt-20 relative overflow-clip py-8">
      <h1 className="font-futura text-3xl sm:text-4xl mb-6 text-white">
        Faculty
      </h1>
      <Image
        src="/lamp1.png"
        alt=""
        width={500}
        height={500}
        className="absolute -top-12 -left-36 z-0 blur-2xl"
      />

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        {faculties.map((faculty) => (
          <div key={faculty.id} className="w-[96%]  md:w-1/2  font-work-sans">
            <div className="rounded-3xl px-14 py-11 bg-[#2C2C2C33] items-center">
              <img
                className="w-32 h-32 md:w-44 md:h-44 mx-auto mb-4 rounded-full"
                src={faculty.photoUrl}
                alt={faculty.name}
              />
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-1  text-nowrap text-center">
                  {faculty.name}
                </h3>
                <p
                  className="text-lg  text-nowrap text-center"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {faculty.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Image
        src="/lamp1.png"
        alt=""
        width={500}
        height={500}
        className="absolute -bottom-16 -right-[130px] z-0 blur-2xl"
      />
    </div>
  );
};

export default Faculty;
