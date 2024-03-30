import { useState, useEffect } from "react";

const RotatingComponent = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setRotationAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 20);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-64 h-64">
      <div className="absolute inset-0 flex justify-center items-center">
        <div
          className="w-24 h-24 border-2 border-gray-300 rounded-full"
          style={{
            transform: `rotate(${rotationAngle}deg)`,
          }}
        >
          <div
            className="w-6 h-6 m-[100px]  rounded-full"
            style={{
              background:
                "linear-gradient(136.4deg, #A008B3 3.76%, #79C0FF 105.06%)",
            }}
          ></div>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-48 h-48 border-2 border-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default RotatingComponent;
