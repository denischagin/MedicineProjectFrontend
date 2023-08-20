import React, { FC, InputHTMLAttributes, useState } from "react";
import { Input } from "../Input/Input";
import { InputGroup } from "../InputGroup";
import { InputRight } from "../InputRight";
import eyeSvg from "../icons/eye.svg";
import css from "./InputPassword.module.scss";
import { InputProps } from "../Input/Input.props";
import { Tooltip } from "shared/components/Tooltip";

interface InputPasswordProps
  extends InputHTMLAttributes<HTMLInputElement>,
    InputProps {}

export const InputPassword: FC<InputPasswordProps> = ({
  fullWidth,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup fullWidth={fullWidth}>
      <Input {...props} type={showPassword ? "text" : "password"} />
      <InputRight
        element={
          <Tooltip
            text={showPassword ? "Спрятать пароль" : "Посмотреть пароль"}
            position="bottom"
            size="large"
          >
            <img
              className={css.password_button}
              src={eyeSvg}
              alt="eye"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </Tooltip>
        }
      />
    </InputGroup>
  );
};
