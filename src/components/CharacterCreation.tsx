import React from "react";
import threeDModel from "../assets/images/3dmodel.jpg";
const CharacterCreation: React.FC = () => {
  return (
    <div className="py-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">3D Character Creation</h2>
        <p className="mb-6 text-gray-300">
          A social media post about 3D character creation, featuring two angry
          green characters with weapons. The post discusses how ChatGPT-4o and
          Tripo make generating 3D game assets "insanely easy" with models that
          can be created "in minutes."
        </p>
        <div className="bg-black p-4 rounded-lg">
          <div className="flex justify-center items-center">
            <img
              src={threeDModel}
              alt="3D Character Creation Example"
              className="w-1/2 max-w-4xl object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCreation;
