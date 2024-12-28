import React from "react";
import styles from "@/styles/components/Button.module.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = "primary",
}) => {
  const classNames = `${styles.btn} ${styles[variant]} ${
    disabled ? styles.disabled : ""
  }`;

  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
