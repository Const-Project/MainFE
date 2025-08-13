/**
 * @file avatarCreationStore.ts
 * @description AvatarCreation 컴포넌트의 상태를 관리하는 Zustand 스토어입니다.
 *              새로운 기능추가 시 이 파일을 수정.
 * @version 1.0.0
 * @data 2023-08-04
 */

import { create } from "zustand";

/**
 * @description 아바타 생성 플로우의 전체 상태
 * @property {'initial' | 'remake'} mode - 'initial': 최초 생성, 'remake': 다시 만들기
 * @property {string | null} selectedOptionId - 선택된 아바타 옵션의 ID.
 * @property {object} actions - 상태를 변경하는 함수들의 네임스페이스
 */
interface AvatarCreationState {
  creationMode: "initial" | "remake";
  selectionMode: "initial" | "remake";
  selectedOptionId: string | null;
  actions: {
    completeCreation: () => void;
    completeSelection: () => void;
    selectOption: (optionId: string) => void;
    reset: () => void;
  };
}

/**
 * @description 아바타 생성 및 선택 플로우의 상태를 관리하는 Zustand 스토어.
 *
 * @example
 * const { creationMode, selectionMode, selectedOptionId, actions } = useAvatarCreationStore();
 * actions.selectOption('some-option-id');
 *
 * @creationMode {'initial' | 'remake'} - 아바타 생성 플로우의 현재 모드.
 * @selectionMode {'initial' | 'remake'} - 아바타 선택 플로우의 현재 모드.
 * @selectedOptionId {string | null} - 현재 선택된 아바타 옵션의 ID.
 * @action completeCreation - 생성 플로우를 완료하고 '다시 만들기' 모드로 전환합니다.
 * @action completeSelection - 선택 플로우를 완료하고 '다시 선택하기' 모드로 전환합니다.
 * @action selectOption - 사용자가 아바타 옵션을 선택합니다.
 * @action reset - 모든 상태를 초기값으로 리셋합니다.
 */
export const useAvatarCreationStore = create<AvatarCreationState>(set => ({
  creationMode: "initial",
  selectionMode: "initial",
  selectedOptionId: null,

  actions: {
    completeCreation: () =>
      set({ creationMode: "remake", selectedOptionId: null }),

    completeSelection: () =>
      set({ selectionMode: "remake", selectedOptionId: null }),

    selectOption: (optionId: string) => set({ selectedOptionId: optionId }),

    reset: () =>
      set({
        creationMode: "initial",
        selectionMode: "initial",
        selectedOptionId: null,
      }),
  },
}));
