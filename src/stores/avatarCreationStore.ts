import { create } from "zustand";

interface AvatarCreationState {
  buttonVariant: "primary" | "gray200" | "gray600";
  buttonText: string;
  setButtonState: (
    variant: "primary" | "gray200" | "gray600",
    text: string
  ) => void;
}

export const useAvatarCreationStore = create<AvatarCreationState>(set => ({
  buttonVariant: "primary",
  buttonText: "만들러 가기",
  setButtonState: (variant, text) =>
    set({ buttonVariant: variant, buttonText: text }),
}));
