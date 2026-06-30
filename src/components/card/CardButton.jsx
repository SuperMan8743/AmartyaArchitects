import React from "react";

function CardButton({
  children,
  onClick,
  href,
  target = "_self",
  className=""
}) {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : ""}
        className="
          inline-flex
          items-center
          gap-2
          font-semibold
          text-black
          hover:text-gray-600
          transition
        "
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className="
        inline-flex
        items-center
        gap-2
        font-semibold
        text-black
        hover:text-gray-600
        transition
        `${className}`
      "
    >
      {children}
    </button>
  );
}

export default CardButton;