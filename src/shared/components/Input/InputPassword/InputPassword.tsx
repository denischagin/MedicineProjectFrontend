import React, { FC, InputHTMLAttributes } from "react";
import { Input } from "../Input/Input";
import { InputGroup } from "../InputGroup";
import { InputRight } from "../InputRight";
import eyeSvg from "../icons/eye.svg";
import css from '../Input.module.css'

interface InputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InputPassword: FC<InputPasswordProps> = ({
  fullWidth = false,
  setShowPassword,
  showPassword,
  ...props
}) => {
  return (
    <InputGroup fullWidth={fullWidth}>
      <Input {...props} type={showPassword ? "text" : "password"} />
      <InputRight
        element={
          <img
            className={css.password_button}
            src={eyeSvg}
            alt="eye"
            onClick={() => setShowPassword((prev) => !prev)}
          />
        }
      />
    </InputGroup>
  );
};
