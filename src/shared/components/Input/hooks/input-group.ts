import { useState } from "react";

export const useInputGroup = () => {
  const [isInputFocused, setInputFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setInputFocused(false);
  };

  return {
    isHovered,
    isInputFocused,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
    handleBlur,
  };
};
