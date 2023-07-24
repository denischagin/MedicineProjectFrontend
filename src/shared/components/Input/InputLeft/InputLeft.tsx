import React, { FC } from 'react'
import css from './Input.module.css'

interface InputLeftProps {
  element: JSX.Element
}

export const InputLeft: FC<InputLeftProps> = ({ element }) => {
  return (
    <div className={css.inputLeft}>
      {element}
    </div>
  )
}
