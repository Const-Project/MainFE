/**
 * @file Button.tsx
 * @description 재사용 가능한 버튼 컴포넌트
 * @example "<Button variant='primary' size='lg'>Click Me</Button>"
 */

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "lg"; // 'sm'은 기존 버튼, 'lg'는 새로운 큰 버튼
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "sm", // 기본값 'sm'으로 설정
  children,
  className,
  ...props
}) => {
  const baseStyles = "flex items-center justify-center text-center rounded "; // 공통 스타일

  const sizeStyles = {
    sm: "w-42.5 h-full py-3.5 text-[20px]", // 기존 버튼 크기 및 폰트 사이즈
    lg: "w-[353px] h-[57px] text-[20px]", // 새로운 큰 버튼 크기 및 폰트 사이즈
  };

  const variantStyles = {
    primary: "bg-[var(--color-primary)] text-white",
    secondary: "bg-[var(--color-gray-200)] text-black",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
