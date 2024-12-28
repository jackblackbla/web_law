import React from 'react';
import styles from '@/styles/components/Button.module.scss';
import cx from 'classnames';

interface ButtonProps {
  variant?: 'default' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = 'default',
  size = 'md',
  fullWidth = false,
  disabled = false,
  isLoading = false,
  icon,
  iconPosition = 'left',
  type = 'button',
  onClick,
  children,
  className,
}: ButtonProps) => {
  const buttonClass = cx(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    {
      [styles['button--fullWidth']]: fullWidth,
      [styles['button--disabled']]: disabled || isLoading,
      [styles['button--loading']]: isLoading,
    },
    className
  );

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading && (
        <span className={styles.loadingSpinner}>
          {/* 로딩 스피너 SVG */}
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
      )}
      {!isLoading && icon && iconPosition === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}
      <span className={styles.content}>{children}</span>
      {!isLoading && icon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  );
};

export default Button; 