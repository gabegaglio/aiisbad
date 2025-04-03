import React from "react";

import wizard from "../assets/images/wizard.png";

const Wizard: React.FC = () => {
  return (
    <div className="py-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          2D Character Creation/Animation
        </h2>
        <p className="mb-6 text-gray-300">
          Prompt: <br />
          Create a detailed pixel art frame animation for a game where the final
          image is divided into multiple sub-images, each serving as a
          continuous animation keyframe, design the sequence to depict a wizard
          casting a spell: begin with intricate hand motions, then show the
          wizard conjuring a vibrant fireball, and finally capture the moment of
          casting the fireball. ensure the keyframes transition smoothly and
          continuously, and include as many frames as possible to achieve a high
          level of fluidity and detail in the animation.
          <br />
          Source: <br />
          <a
            href="https://www.reddit.com/r/aigamedev/comments/1jkthal/ai_animation_gpt4o/"
            className="text-blue-400 hover:text-blue-300 break-words inline-block max-w-full"
          >
            https://www.reddit.com/r/aigamedev/comments/1jkthal/ai_animation_gpt4o/
          </a>
        </p>
        <div className="bg-black p-4 rounded-lg">
          <div className="flex justify-center items-center">
            <img
              src={wizard}
              alt="Wizard Animation Frames"
              className="w-3/4 md:w-1/2 max-w-4xl object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wizard;
