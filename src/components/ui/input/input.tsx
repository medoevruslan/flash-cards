import React, { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

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
export const Input = forwardRef<
  HTMLInputElement,
  InputProps & Omit<ComponentPropsWithoutRef<'input'>, keyof InputProps>
>(
  (
    {
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
      value,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onChangeText?.(e.currentTarget.value)
    }
    const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      onKeyPress?.(e)
      onEnter && e.key === 'Enter' && onEnter()
    }

    const handleToggleShowPassport = () => {
      setShowPassword(!showPassword)
    }

    const handleClearInput = () => {
      clearInput?.()
    }

    const finalInputClassName = clsx(
      s.input,
      error && s.inputError,
      type === 'search' && s.searchInput
    )

    const inputType = type === 'password' && !showPassword ? 'password' : 'text'
    const showClearInputBtn = !!value && clearInput

    return (
      <>
        <div className={clsx(s.inputContainer, className)} {...rest}>
          {label && (
            <label className={s.label} htmlFor={'default-input'}>
              {label}
            </label>
          )}
          <div className={s.iconRelate}>
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
              ref={ref}
              type={inputType}
              value={value}
              {...rest}
            />
          </div>
          {error && (
            <Typography className={s.error} variant={'caption'}>
              {error}
            </Typography>
          )}
        </div>
      </>
    )
  }
)
