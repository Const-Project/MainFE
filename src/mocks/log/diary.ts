import type { DiaryResponse } from "@/types/log/diary";

// Mock 데이터 캐시
const mockDataCache = new Map<string, DiaryResponse>();

export function createMockDiaryResponse(
  year: number,
  month: number
): DiaryResponse {
  const cacheKey = `${year}-${month}`;

  // 캐시된 데이터가 있으면 반환
  if (mockDataCache.has(cacheKey)) {
    return mockDataCache.get(cacheKey)!;
  }

  const mockImages = [
    "/log/log1.svg",
    "/log/log2.svg",
    "/log/log3.svg",
    "/log/log4.svg",
    "/log/log5.svg",
    "/log/log6.svg",
    "/log/log7.svg",
    "/log/log8.svg",
    "/log/log9.svg",
    "/log/log10.svg",
    "/log/log11.svg",
    "/log/log12.svg",
    "/log/log13.svg",
    "/log/log14.svg",
    "/log/log15.svg",
    "/log/log16.svg",
    "/log/log17.svg",
    "/log/log18.svg",
  ];

  const data = mockImages.map((imageUrl, index) => ({
    id: index + 1,
    title: `일기 제목 ${index + 1}`,
    content: `이것은 ${year}년 ${month}월의 ${index + 1}번째 일기입니다. 식물을 키우면서 느낀 감정과 경험을 기록했습니다.`,
    imageUrl,
    likeCount: Math.floor(Math.random() * 10),
    createdAt: new Date(
      year,
      month - 1,
      Math.floor(Math.random() * 28) + 1
    ).toISOString(),
    updatedAt: new Date(
      year,
      month - 1,
      Math.floor(Math.random() * 28) + 1
    ).toISOString(),
    public: Math.random() > 0.3,
  }));

  const result = { data };

  // 캐시에 저장
  mockDataCache.set(cacheKey, result);

  return result;
}

// 기본 예시 상수 (현재 월)
const now = new Date();
export const MOCK_DIARY_RESPONSE: DiaryResponse = createMockDiaryResponse(
  now.getFullYear(),
  now.getMonth() + 1
);
