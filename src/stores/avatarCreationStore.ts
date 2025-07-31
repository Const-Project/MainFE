import { create } from "zustand";

/**
 * @interface AvatarCreationState
 * @description AvatarCreation 컴포넌트의 상태를 관리하는 인터페이스.
 * @property {string} buttonVariant - 버튼의 변형 스타일 ("primary", "gray200", "gray600")
 * @property {string} buttonText - 버튼에 표시될 텍스트
 * @property {function} setButtonState - 버튼 상태를 설정하는 함수 (variant: "primary" | "gray200" | "gray600", text: string)
 * @property {boolean} isAvatarOptionSelected - 아바타 옵션이 선택되었는지 여부 (true: 선택됨, false: 선택되지 않음)
 * @property {function} setIsAvatarOptionSelected - 아바타 옵션 선택 상태를 설정하는 함수 (setIsAvatarOptionSelected(true | false))
 * @example - const { buttonVariant, buttonText, setButtonState, isAvatarOptionSelected, setIsAvatarOptionSelected } = useAvatarCreationStore();
 */
interface AvatarCreationState {
  buttonVariant: "primary" | "gray200" | "gray600";
  buttonText: string;
  setButtonState: (
    variant: "primary" | "gray200" | "gray600",
    text: string
  ) => void;
  isAvatarOptionSelected: boolean;
  setIsAvatarOptionSelected: (isSelected: boolean) => void;
}

/**
 * @function useAvatarCreationStore
 * @description AvatarCreation 컴포넌트의 상태를 관리하는 Zustand 스토어 훅.
 * @returns {AvatarCreationState} AvatarCreation 컴포넌트의 상태와 상태를 변경하는 함수들을 포함하는 객체.
 * @example - const { buttonVariant, buttonText, setButtonState, isAvatarOptionSelected, setIsAvatarOptionSelected } = useAvatarCreationStore();
 */
export const useAvatarCreationStore = create<AvatarCreationState>(set => ({
  buttonVariant: "primary",
  buttonText: "만들러 가기",
  setButtonState: (variant, text) =>
    set({ buttonVariant: variant, buttonText: text }),
  isAvatarOptionSelected: false,
  setIsAvatarOptionSelected: (isSelected: boolean) =>
    set({ isAvatarOptionSelected: isSelected }),
}));
