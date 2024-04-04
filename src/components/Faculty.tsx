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
    <div className="w-[90%] mx-auto mt-20 relative">
      <Image
        src="/lamp1.png"
        alt=""
        width={500}
        height={500}
        className="absolute -top-12 -left-36 z-0"
      />

      <h1 className="font-futura text-4xl mb-6 text-white">Faculty</h1>
      <div className="flex flex-wrap justify-between">
        {faculties.map((faculty) => (
          <div key={faculty.id} className="w-[96%] mx-auto md:w-1/2 p-4 font-work-sans">
            <div className="rounded-3xl p-20 bg-[#2C2C2C33]">
              <img
                className="w-32 h-32 md:w-44 md:h-44 mx-auto mb-4 rounded-full"
                src={faculty.photoUrl}
                alt={faculty.name}
              />
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-1">{faculty.name}</h3>
                <p className="text-lg" style={{ whiteSpace: "nowrap" }}>
                  {faculty.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
