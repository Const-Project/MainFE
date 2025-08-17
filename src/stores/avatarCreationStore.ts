/**
 * @file avatarCreationStore.ts
 * @description AvatarCreation 컴포넌트의 상태를 관리하는 Zustand 스토어입니다.
 *              새로운 기능추가 시 이 파일을 수정.
 * @version 1.2.0
 * @data 2023-08-17
 */

import { create } from "zustand";

/**
 * @description 선택된 아바타의 상세 정보
 * @property {string | null} description - 아바타에 대한 설명
 * @property {string | null} img - 아바타 이미지 URL
 * @property {number} activeIndex - 현재 활성화된 Swiper 슬라이드의 인덱스
 */
interface SelectedAvatar {
  description: string | null;
  img: string | null;
  activeIndex: number;
}

/**
 * @description 아바타 생성 플로우의 전체 상태
 * @property {'initial' | 'remake'} creationMode - 'initial': 최초 생성, 'remake': 다시 만들기
 * @property {'initial' | 'remake'} selectionMode - 'initial': 최초 선택, 'remake': 다시 선택
 * @property {string | null} selectedOptionId - 선택된 아바타 옵션의 ID.
 * @property {SelectedAvatar} selectedAvatar - 선택된 아바타의 상세 정보
 * @property {object} actions - 상태를 변경하는 함수들의 네임스페이스
 */
interface AvatarCreationState {
  creationMode: "initial" | "remake";
  selectionMode: "initial" | "remake";
  selectedOptionId: string | null;
  selectedAvatar: SelectedAvatar;
  actions: {
    completeCreation: () => void;
    completeSelection: () => void;
    selectOption: (optionId: string) => void;
    selectAvatar: (avatar: Partial<SelectedAvatar>) => void;
    reset: () => void;
  };
}

const initialState = {
  creationMode: "initial" as const,
  selectionMode: "initial" as const,
  selectedOptionId: null,
  selectedAvatar: {
    description: null,
    img: null,
    activeIndex: 0,
  },
};

/**
 * @description 아바타 생성 및 선택 플로우의 상태를 관리하는 Zustand 스토어.
 */
export const useAvatarCreationStore = create<AvatarCreationState>(set => ({
  ...initialState,
  actions: {
    completeCreation: () =>
      set({ creationMode: "remake", selectedOptionId: null }),

    completeSelection: () =>
      set({ selectionMode: "remake", selectedOptionId: null }),

    selectOption: (optionId: string) => set({ selectedOptionId: optionId }),

    selectAvatar: (avatar: Partial<SelectedAvatar>) =>
      set(state => ({
        ...state,
        selectedAvatar: { ...state.selectedAvatar, ...avatar },
      })),

    reset: () => set(initialState),
  },
}));
