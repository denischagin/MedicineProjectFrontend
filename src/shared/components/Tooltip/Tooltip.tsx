import React, { Children, cloneElement, ReactElement, useState } from "react";
import css from "./Tooltip.module.css";

interface TooltipProps {
  text: string;
  position?: "top" | "right" | "bottom" | "left";
  children: ReactElement | ReactElement[];
  size?: "small" | "medium" | "large";
  color?: "default" | "error" | "success" | "warning";
}

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  position = "top",
  size = "medium",
  color = "default",
  children,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseOver = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const tooltipClass = [
    css.tooltip,
    css[position],
    css[size],
    showTooltip && css.active,
    color && css[color],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={css.tooltipContainer}>
      <span className={tooltipClass}>{text}</span>
      {React.Children.map(children, (child) => {
        return cloneElement(child, {
          onMouseOver: handleMouseOver,
          onMouseLeave: handleMouseLeave,
        });
      })}
    </span>
  );
};
