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
  mode: "initial" | "remake";
  selectedOptionId: string | null;
  actions: {
    completeInitialCreation: () => void;
    selectOption: (optionId: string) => void;
    reset: () => void;
  };
}

/**
 * @description 아바타 생성 플로우의 상태를 관리하는 Zustand 스토어.
 *
 * @example
 * const { mode, selectedOptionId, actions } = useAvatarCreationStore();
 * actions.selectOption('some-option-id');
 *
 * @mode {'initial' | 'remake'} - 현재 모드. 'initial'은 최초 생성, 'remake'는 다시 만들기 모드입니다.
 * @selectedOptionId {string | null} - 현재 선택된 아바타 옵션의 ID. 선택되지 않은 경우 null입니다.
 * @action completeInitialCreation - set({ mode: 'remake', selectedOptionId: null }) => '다시 만들기' 모드로 전환합니다.
 * @action selectOption - set({ selectedOptionId: optionId }) => 사용자가 아바타 옵션을 선택합니다.
 * @action reset - set({ mode: 'initial', selectedOptionId: null }) => 모든 상태를 초기값으로 리셋합니다.
 */
export const useAvatarCreationStore = create<AvatarCreationState>(set => ({
  mode: "initial",
  selectedOptionId: null,
  actions: {
    /** 최초 생성 플로우를 완료하고 '다시 만들기' 모드로 전환합니다. */
    completeInitialCreation: () =>
      set({ mode: "remake", selectedOptionId: null }),

    /** 사용자가 아바타 옵션을 선택합니다. */
    selectOption: (optionId: string) => set({ selectedOptionId: optionId }),

    /** 모든 상태를 초기값으로 리셋합니다. */
    reset: () => set({ mode: "initial", selectedOptionId: null }),
  },
}));
