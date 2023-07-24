import React, { FC } from 'react'
import css from '../Input.module.css'

interface InputRightProps {
  element: JSX.Element
}

export const InputRight: FC<InputRightProps> = ({ element }) => {
  return (
    <div className={css.inputRight}>
      {element}
    </div>
  )
}
