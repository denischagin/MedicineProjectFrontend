import React, { FC, InputHTMLAttributes, ReactElement } from "react";
import { Input } from "../Input/Input";
import { InputGroup } from "../InputGroup";
import { InputRight } from "../InputRight";
import eyeSvg from "../icons/eye.svg";

interface InputPasswordProps {
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
            src={eyeSvg}
            alt="eye"
            onClick={() => setShowPassword((prev) => !prev)}
          />
        }
      />
    </InputGroup>
  );
};
