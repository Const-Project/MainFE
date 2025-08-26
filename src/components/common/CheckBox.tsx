/**
 * @file  CheckBox.tsx
 * @description 원형 체크박스 (항상 체크 아이콘 노출, input 기반)
 */

import React from "react";

interface CheckoutCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  strokeWidth?: number;
}

const Checkbox: React.FC<CheckoutCheckboxProps> = ({
  label,
  className = "",
  strokeWidth = 3,
  ...props
}) => {
  return (
    <label className="relative flex items-center gap-2 cursor-pointer select-none">
      <input
        type="checkbox"
        className={`
          peer rounded-full border-2 appearance-none
          checked:bg-[var(--color-primary)] checked:border-none
          bg-white border-gray-400
          w-4 h-4 ${className}
        `}
        {...props}
      />
      {/* 체크 아이콘 (항상 보임) */}
      <svg
        className={`
          pointer-events-none absolute justify-center
          peer-checked:text-white text-gray-400
          w-4 h-3 ${className}
        `}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        viewBox="0 0 24 24"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-sm">{label}</span>
    </label>
  );
};

export default Checkbox;
