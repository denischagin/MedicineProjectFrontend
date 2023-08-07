import React, {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import css from "./Tooltip.module.css";

interface TooltipProps {
  text: string;
  position?: "top" | "right" | "bottom" | "left";
  children: ReactElement | ReactElement[];
  size?: "small" | "medium" | "large";
  color?: "default" | "error" | "success" | "warning";
  delay?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  position = "top",
  size = "medium",
  color = "default",
  delay = 0,
  children,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => timer.current && clearTimeout(timer.current), []);

  const handleMouseOver = () => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setShowTooltip(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timer.current) clearTimeout(timer.current);
    
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
