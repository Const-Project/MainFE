/**
 * @file Button.tsx
 * @description 재사용 가능한 버튼 컴포넌트
 * @example "<Button variant='primary' size='lg'>Click Me</Button>"
 */

import React from "react";

/**
 * @description ButtonProps 인터페이스는 버튼 컴포넌트의 속성을 정의합니다.
 * @property {string} [variant] - 버튼의 배경 색, 텍스트 색상을 지정합니다. 기본값은 'primary'입니다.
 * @property {string} [size] - 버튼의 크기를 지정합니다. 기본값은 'sm'입니다.
 * @property {React.ReactNode} children - 버튼 내부에 렌더링할 내용을 지정합니다.
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement>} [className] - 추가적인 CSS 클래스를 지정할 수 있습니다.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gray200" | "gray600";
  size?: "xsSelect" | "xsCreation" | "sm" | "lg" | "max"; // 'sm'은 기존 버튼, 'lg'는 새로운 큰 버튼
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "sm",
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center text-center rounded-[8px] "; // 공통 스타일

  const sizeStyles = {
    xsSelect: "w-34.5 h-11.25 text-[18px] px-5 py-2",
    xsCreation: "w-30.75 h-11.25 text-[18px] px-5 py-2 ",
    sm: "w-42.5 h-full py-3.5 text-[20px]",
    lg: "w-[353px] h-[57px] text-[20px]",
    max: "w-full h-18 text-[20px]",
  };

  const variantStyles = {
    primary: "bg-[var(--color-primary)] text-white",
    gray200: "bg-[var(--color-gray-200)] text-black",
    gray600: "bg-[var(--color-gray-600)] text-[var(--color-gray-400)]",
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
