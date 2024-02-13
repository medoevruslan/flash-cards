import React, { ComponentPropsWithoutRef, useRef, useState } from 'react'

import s from './input.module.scss'

export type InputProps = {
  clearInput?: () => void
  disabled?: boolean
  error?: React.ReactNode
  label?: string
  onChangeText?: (value: string) => void
  onEnter?: () => void
  placeholder?: string
  type?: 'password' | 'search'
} & ComponentPropsWithoutRef<'input'>
export function Input({
  className,
  clearInput,
  error,
  label,
  onChange,
  onChangeText,
  onEnter,
  onKeyPress,
  placeholder,
  type,
  ...rest
}: InputProps & Omit<ComponentPropsWithoutRef<'input'>, keyof InputProps>) {
  const [showPassword, setShowPassword] = useState(false)
  const [value, setValue] = useState('')
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    setValue(e.target.value)
    onChangeText?.(e.currentTarget.value)
  }
  const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyPress?.(e)
    onEnter && e.key === 'Enter' && onEnter()
  }

  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleToggleShowPassport = () => {
    value && setShowPassword(!showPassword)
  }

  const handleClearInput = () => {
    clearInput?.()
    setValue('')
  }

  const finalInputClassName =
    s.input +
    (error ? ' ' + s.inputError : '') +
    (className ? ' ' + className : '') +
    (type === 'search' ? ' ' + s.searchInput : '')

  const inputType = type === 'password' && !showPassword ? 'password' : 'text'
  const showClearInputBtn = !!value && clearInput

  return (
    <>
      <div className={s.inputContainer}>
        {label && (
          <label className={s.label} htmlFor={'default-input'}>
            {label}
          </label>
        )}
        {type === 'search' && showClearInputBtn && (
          <span className={`${s.clearSearch}`} onClick={handleClearInput} />
        )}
        {type === 'search' && <span className={`${s.searchIcon}`} onClick={onEnter} />}
        {type === 'password' && (
          <span
            className={s.passwordIcon}
            onMouseDown={handleToggleShowPassport}
            onMouseUp={handleToggleShowPassport}
          />
        )}
        <input
          className={finalInputClassName}
          id={'default-input'}
          onChange={handleOnChange}
          onKeyPress={handleKeypress}
          placeholder={placeholder}
          ref={inputRef}
          type={inputType}
          {...rest}
        />
      </div>
      {error && <span className={s.error}>{error}</span>}
    </>
  )
}
