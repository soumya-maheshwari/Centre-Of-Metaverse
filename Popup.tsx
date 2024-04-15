import Image from "next/image";
import React, { useRef } from "react";

interface Props {
  show: boolean;
  onClose: () => void;
}

const Popup: React.FC<Props> = ({ show, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === popupRef.current) {
      onClose();
    }
  };

  return (
    <>
      {show && (
        <div
          ref={popupRef}
          className="fixed z-10 inset-0 flex items-center justify-center bg-opacity-50"
          onClick={handleClose}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md relative">
            <div className="flex justify-end">
              <button
                className="absolute top-0 right-0 text-gray-500 hover:text-gray-800 mt-2 mr-2"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                Registration Successful
              </h1>
              <p className="text-gray-600">
                Thank you for registering! Please check your email for further
                updates.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
