import React from "react";
import { socialLinks } from "../../constants/data";

const Socials = () => {
  return (
    <>
      <div className="flex gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            {typeof link.icon === "function" ? (
              <link.icon className="text-xl text-custom-white transition-linear hover:scale-125 drop-shadow-lg" />
            ) : (
              <img
                src={link.icon}
                alt={link.title}
                className="size-8 p-1 transition-linear hover:scale-125 drop-shadow-lg"
              />
            )}
          </a>
        ))}
      </div>
    </>
  );
};

export default Socials;
