import { FC } from "react";
import css from "./Alert.module.css";

interface Position {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

interface AlertProps {
  onClose?: () => void;
  onSubmit?: () => void;
  open: boolean;
  title: string;
  submitButtonText: string;
  exitButtonText: string;
  description?: string;
  position?: Position
}

const Alert: FC<AlertProps> = ({
  title,
  description,
  exitButtonText,
  onClose,
  onSubmit,
  open,
  submitButtonText,
  position
}) => {
  const alertClasses = open ? [css.alert, css.active].join(" ") : css.alert;

  return (
    <div className={alertClasses} style={{...position}}>
      <div className={css.alert_wrapper}>
        <h3>{title}</h3>

        <p>{description}</p>

        <div className={css.button_panel}>
          <button onClick={onSubmit}>{submitButtonText}</button>

          <button onClick={onClose}>{exitButtonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
