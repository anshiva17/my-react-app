import React from "react";

// Reusable Heading Component
const Heading = ({ text, className = "", style = {}, level = 6 }) => {
  // Define specific constants for class and style
  const defaultClass = "text-uppercase text-primary mb-3";
  const defaultStyle = {
    // Default styles (you can modify these as needed)

    letterSpacing: "3px",
  };

  // Determine the heading tag based on the `level` prop
  const HeadingTag = `h${level}`;

  // If className is passed, use it; otherwise, apply the default class
  const appliedClass = className || defaultClass;
  const appliedStyle = className ? style : { ...defaultStyle, ...style };

  return (
    <HeadingTag
      className={appliedClass} // Apply the passed className or the default one
      style={appliedStyle} // Merge the default styles with any passed styles
    >
      {text}
    </HeadingTag>
  );
};

export default Heading;
