import React, { FC, InputHTMLAttributes } from 'react'
import css from '../Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean
}

export const Input: FC<InputProps> = ({fullWidth, ...props}) => {
  const classes = fullWidth ? [css.fullwidth, css.input].join(" ") : css.input

  return (
    <input className={classes} {...props} />
  )
}