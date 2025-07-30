/**
 * @file Button.tsx
 * @description 재사용 가능한 버튼 컴포넌트
 * @example "<Button variant='primary'>Click Me</Button>"
 */

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const baseStyles = "font-[20px] py-3.5 h-full text-center rounded w-42.5"; // 공통 스타일
  const variantStyles = {
    primary: "bg-gray-600 text-white",
    secondary: "bg-gray-200 text-gray-800",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
