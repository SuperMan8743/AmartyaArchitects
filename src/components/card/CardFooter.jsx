import React from "react";

function CardFooter({ children }) {
  return (
    <div className="mt-6 flex items-center justify-between">
      {children}
    </div>
  );
}

export default CardFooter;