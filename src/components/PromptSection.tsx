import React from "react";

const PromptSection: React.FC = () => {
  return (
    <div className="py-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Original Prompt</h2>
        <div className="p-6 bg-black rounded-lg text-gray-300 font-mono text-sm whitespace-pre-wrap">
          First, create a project with vite, react, typescript, and tailwindcss.
          I will first provide you with 4 images, make sure each image goes with
          the prompt I will provide you with.
          <br></br>
          <br></br>
          Wizard: <br></br>Prompt: Create a detailed pixel art frame animation
          for a game where the final image is divided into multiple sub-images,
          each serving as a continuous animation keyframe, design the sequence
          to depict a wizard casting a spell: begin with intricate hand motions,
          then show the wizard conjuring a vibrant fireball, and finally capture
          the moment of casting the fireball. ensure the keyframes transition
          smoothly and continuously, and include as many frames as possible to
          achieve a high level of fluidity and detail in the animation.{" "}
          <br></br>
          Source: <br></br>
          <a
            className="text-blue-400 hover:text-blue-300 break-words inline-block max-w-full"
            href="https://www.reddit.com/r/aigamedev/comments/1jkthal/ai_animation_gpt4o/"
          >
            https://www.reddit.com/r/aigamedev/comments/1jkthal/ai_animation_gpt4o/
          </a>
          <br></br>
          <br></br>
          Archer: <br></br>
          Prompt: Create a detailed pixel art frame animation for a game where
          the final image is divided into multiple sub-images, each serving as a
          continuous animation keyframe, design the sequence to depict an archer
          shooting a bow with intricate hand and bow motions, then show the
          archer pulling the street, and finally capture the moment of letting
          go of the string. ensure the keyframes transition smoothly and
          continuously, and include as many frames as possible to achieve a high
          level of fluidity and detail in the animation. <br></br>
          <br></br>
          Art Style Recreation: <br></br>
          Prompt: Given the picture of the individuals depicted, transform the
          photo into Studio Ghibli style
          <br></br>
          <br></br>
          Music: <br></br>
          Prompt: Relaxed Jazzlounge with smooth saxophone, great for city tours
          and coffee shop scenes
          https://www.mureka.ai/song-detail/HxgDX2wJvUADBzkodA6D3Y?is_from_share=1
          <br></br>
          <br></br>
          If there is no image, use the link provided to allow the user to click
          on the link to bring the user to the website, make the website
          background black with a white monoblock font, like the Chicago
          typeface, for the beginning of the site make it fill the entire screen
          and say "AI isn't so great" and underneath say "Collection of fields
          AI is destroying", then create sections for the gaming images and the
          art images for einstein and the jazz song, at the end create a section
          that pastes this prompt in to show the user what the prompt was to
          create the website now create a final section, that pastes this text
          into it.
        </div>
      </div>
    </div>
  );
};

export default PromptSection;
