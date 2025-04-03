import React from "react";

const JazzSong: React.FC = () => {
  return (
    <div className="py-8 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 font-mono">Music</h2>
        <p className="mb-6 text-gray-300 font-mono">
          Prompt: <br></br>
          Relaxed Jazzlounge with smooth saxophone, great for city tours and
          coffee shop scenes.
        </p>
        <div className="mb-6 p-6 border border-gray-700 rounded-lg flex justify-center">
          <a
            href="https://www.mureka.ai/song-detail/HxgDX2wJvUADBzkodA6D3Y?is_from_share=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-400 hover:text-blue-300 transition-colors duration-300 font-mono inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Listen to Jazz Song on Mureka.ai
          </a>
        </div>
      </div>
    </div>
  );
};

export default JazzSong;
