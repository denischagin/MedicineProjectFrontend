import React, { FC, InputHTMLAttributes } from 'react'
import css from '../Input.module.css'
import { InputProps as CommonProps } from 'shared/components/input/types';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, CommonProps {}

export const Input: FC<InputProps> = ({fullWidth, ...props}) => {
  const classes = fullWidth ? [css.fullwidth, css.input].join(" ") : css.input

  return (
    <input className={classes} {...props} />
  )
}
