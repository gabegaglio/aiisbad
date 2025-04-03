import React from "react";
import einstein from "../assets/images/einstein.jpeg";

const Einstein: React.FC = () => {
  return (
    <div className="py-8 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 font-mono">Art Style Recreation</h2>
        <p className="mb-6 text-gray-300 font-mono">
          Prompt: <br></br>
          Given the picture of the individuals depicted, transform the photo
          into Studio Ghibli style
        </p>
        <div className="bg-black p-4 rounded-lg">
          <div className="flex justify-center items-center">
            <img
              src={einstein}
              alt="Einstein Photo to Animation Comparison"
              className="w-3/4 md:w-1/2 max-w-4xl object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Einstein;
