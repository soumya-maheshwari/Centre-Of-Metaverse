import React from "react";

const Faculty = () => {
  const faculties = [
    {
      id: 1,
      name: "Mr Pancham Singh",
      role: "(Assistant Professor)",
      photoUrl: "./pancham.png",
    },
    {
      id: 2,
      name: "Prof. Rahul Singh",
      role: "(HOD)",
      photoUrl: "./HOD.png",
    },
  ];

  return (
    <div className="md:w-[90%] mx-auto mt-20">
      <h1 className="font-futura text-4xl mb-6 text-white">Faculty</h1>
      <div className="flex">
        {faculties.map((faculty) => (
          <div key={faculty.id} className="flex-auto max-w-[50%] p-4">
            <div className="rounded-lg p-20 bg-[#2C2C2C33]">
              <img
                className="w-32 h-32 mx-auto mb-4 rounded-full"
                src={faculty.photoUrl}
                alt={faculty.name}
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">{faculty.name}</h3>
                <p className="text-md">{faculty.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
