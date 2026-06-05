import React from "react";

const CV = () => {
  return (
    <div className="flex justify-center items-center my-16">
      <a
        href="https://drive.google.com/file/d/1v0NUUXkgKkNwtiTpMbTaNPkYtVq7pA8g/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          relative
          inline-flex
          items-center
          gap-3
          px-8
          py-4
          text-lg
          font-semibold
          text-white
          rounded-full
          bg-gradient-to-r
          from-blue-600
          via-purple-600
          to-pink-600
          bg-[length:200%_200%]
          hover:bg-right
          transition-all
          duration-500
          ease-in-out
          shadow-lg
          hover:shadow-2xl
          hover:scale-105
          active:scale-95
          overflow-hidden
        "
      >
        {/* Animated Background Effect */}
        <span
          className="
            absolute
            inset-0
            bg-white/20
            translate-x-[-100%]
            group-hover:translate-x-[100%]
            transition-transform
            duration-1000
            skew-x-12
          "
        ></span>

        {/* Download Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 group-hover:animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v10m0 0l-4-4m4 4l4-4m-9 8h10"
          />
        </svg>

        <span className="relative z-10">Download CV</span>
      </a>
    </div>
  );
};

export default CV;