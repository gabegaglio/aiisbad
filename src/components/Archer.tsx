import React from "react";

import archer from "../assets/images/archer.png";

const Archer: React.FC = () => {
  return (
    <div className="py-8 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Archer</h2>
        <p className="mb-6 text-gray-300">
          Prompt: <br></br>
          Create a detailed pixel art frame animation for a game where the final
          image is divided into multiple sub-images, each serving as a
          continuous animation keyframe, design the sequence to depict an archer
          shooting a bow with intricate hand and bow motions, then show the
          archer pulling the street, and finally capture the moment of letting
          go of the string. ensure the keyframes transition smoothly and
          continuously, and include as many frames as possible to achieve a high
          level of fluidity and detail in the animation.
        </p>
        <div className="bg-black p-4 rounded-lg">
          <div className="flex justify-center items-center">
            <img
              src={archer}
              alt="Archer Animation Frames"
              className="w-3/4 md:w-1/2 max-w-4xl object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archer;
