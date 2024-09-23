import React, { memo, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib'

import style from './Input.module.scss'

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  type?: string
  placeholder?: string
  onChange?: (value: string) => void
  autofocus?: boolean
}

export const Input: React.FC<InputProps> = memo(function Input({
  className,
  value,
  type = 'text',
  placeholder,
  onChange,
  autofocus,
  ...otherProps
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autofocus])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }

  return (
    <div className={classNames(style.InputWrapper, {}, [className])}>
      {placeholder && <div className={style.placeholder}>{placeholder + '>'}</div>}
      <div className={style.caretWrapper}>
        <input
          ref={ref}
          type={type}
          className={style.input}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          autoFocus={autofocus}
          {...otherProps}
        />
        {isFocused && <span className={style.caret} style={{ left: `${caretPosition * 9}px` }} />}
      </div>
    </div>
  )
})
