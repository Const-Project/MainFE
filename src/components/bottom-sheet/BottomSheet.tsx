import React, { useEffect, useRef, useState } from "react";

import Plant from "@/assets/icons/bottom-sheet/plant.svg?react";
import Potato from "@/assets/icons/bottom-sheet/potato.svg?react";
import Check from "@/assets/icons/common/check.svg?react";
import UnCheck from "@/assets/icons/common/uncheck.svg?react";

const BottomSheet: React.FC = () => {
  // ===== 표시용 상태 =====
  const [isChecked] = useState(true);
  const [isChecked2] = useState(false);
  const [isChecked3] = useState(false);
  const [potatoCount] = useState(7);

  // ===== 스냅/드래그 파라미터 =====
  const snapPoints = [200, 560]; // 펼쳐진 "높이" 값 (peek, full)
  const maxSnap = Math.max(...snapPoints);
  const minTranslate = maxSnap - snapPoints[0]; // peek 위치의 translateY

  // 스냅 완료 상태를 보관(초기엔 닫힘 위치로 시작)
  const [y, setY] = useState<number>(maxSnap);

  // ===== DOM/드래그 제어용 ref =====
  const sheetRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);
  const dragging = useRef(false);
  const startY = useRef(0);
  const startTranslate = useRef(0);
  const liveTranslate = useRef(0);
  const lastMoveT = useRef(0);
  const lastMoveY = useRef(0);
  const velocity = useRef(0);

  // 드래그 끝단 저항감(러버밴드)
  const OVERDRAG = 40;
  const RESISTANCE = 0.35;

  // ===== 유틸 =====
  const applyStyle = (ty: number, animate = false) => {
    const el = sheetRef.current;
    if (!el) return;
    el.style.willChange = "transform";
    el.style.transition = animate
      ? "transform 280ms cubic-bezier(.2,.8,.2,1)"
      : "none";
    el.style.transform = `translateY(${ty}px) translateZ(0)`; // GPU 힌트
  };

  const clampWithRubber = (raw: number) => {
    if (raw < 0) return 0 + (raw - 0) * RESISTANCE; // 위로 과도하게 끌면 저항
    if (raw > minTranslate) {
      const over = raw - minTranslate;
      return minTranslate + Math.min(over, OVERDRAG) * RESISTANCE; // 아래도 약간만
    }
    return raw;
  };

  const snapTo = (idx: number) => {
    const h = snapPoints[idx];
    const ty = maxSnap - h; // 목표 translateY
    applyStyle(ty, true);
    // 애니 끝나면 상태 동기화
    setTimeout(() => setY(ty), 300);
    liveTranslate.current = ty;
  };

  // ===== 초기 진입: peek(200)까지 슥 올라오기 =====
  useEffect(() => {
    const initialIdx = 0; // peek
    const target = maxSnap - snapPoints[initialIdx];
    requestAnimationFrame(() => {
      applyStyle(target, true);
      setY(target);
      liveTranslate.current = target;
    });
  }, [maxSnap]);

  // ===== 드래그 핸들러 (핸들 바에만 바인딩 권장) =====
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);

    startY.current = e.clientY;
    startTranslate.current = liveTranslate.current || y;

    lastMoveT.current = performance.now();
    lastMoveY.current = e.clientY;

    // 드래그 시작 시 트랜지션 끄기
    const el = sheetRef.current;
    if (el) el.style.transition = "none";
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;

    const now = performance.now();
    const dy = e.clientY - startY.current;
    const rawNext = startTranslate.current + dy;
    const next = clampWithRubber(rawNext);

    // 속도(px/ms)
    const dt = Math.max(1, now - lastMoveT.current);
    velocity.current = (e.clientY - lastMoveY.current) / dt;
    lastMoveT.current = now;
    lastMoveY.current = e.clientY;

    liveTranslate.current = next;

    if (rafId.current == null) {
      rafId.current = requestAnimationFrame(() => {
        applyStyle(liveTranslate.current, false);
        cancelAnimationFrame(rafId.current!);
        rafId.current = null;
      });
    }

    e.preventDefault(); // 배경 스크롤/텍스트 선택 방지
  };

  const onPointerUp = () => {
    if (!dragging.current) return;
    dragging.current = false;

    // 열린 "높이" 기준으로 관성 투사(160ms 정도)
    const openedHeight = maxSnap - liveTranslate.current;
    const projected = openedHeight + velocity.current * -160;

    // 가까운 스냅 찾기
    let bestIdx = 0;
    let bestDiff = Infinity;
    snapPoints.forEach((h, i) => {
      const diff = Math.abs(h - projected);
      if (diff < bestDiff) {
        bestDiff = diff;
        bestIdx = i;
      }
    });

    snapTo(bestIdx);
  };

  return (
    <div
      className="absolute inset-0 z-50 overflow-hidden"
      style={{ touchAction: "none" }}
    >
      {/* 백드롭: 클릭 시 peek으로 내려가기 (완전 닫힘 X) */}
      <div
        className="absolute inset-0 bg-transparent"
        onClick={() => snapTo(0)}
      />

      {/* 패널 */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        <div
          ref={sheetRef}
          className="pointer-events-auto w-full max-w-[393px] rounded-t-2xl border-t border-gray-200 bg-white p-2"
          // 스냅 완료 상태 동기화 전용(드래그 중엔 applyStyle이 직접 반영)
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {/* drag handle (여기에만 포인터 바인딩하면 콘텐츠 스크롤과 충돌 줄어듦) */}
          <div className="mx-auto mb-2 h-1 w-10 rounded-2xl bg-gray-400 select-none cursor-grab active:cursor-grabbing" />

          {/* ======= 콘텐츠 ======= */}
          <div className="rounded-t-2xl bg-white p-4 pt-2">
            <div className="text-heading2 flex justify-between">
              오늘의 미션
              <div className="flex gap-2">
                {isChecked ? (
                  <Check className="h-8 w-8" />
                ) : (
                  <UnCheck className="h-8 w-8" />
                )}
                {isChecked2 ? (
                  <Check className="h-8 w-8" />
                ) : (
                  <UnCheck className="h-8 w-8" />
                )}
                {isChecked3 ? (
                  <Check className="h-8 w-8" />
                ) : (
                  <UnCheck className="h-8 w-8" />
                )}
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              {[
                { label: "오늘의 일기 쓰기", on: isChecked },
                { label: "식물 사진 찍기", on: isChecked2 },
                { label: "퀴즈 풀기", on: isChecked3 },
              ].map(({ label, on }, i) => (
                <div
                  key={i}
                  className={`flex w-full justify-between rounded-lg border p-4 transition-colors
                    ${
                      on
                        ? "border-transparent bg-primary-varient text-primary-font text-body1"
                        : "border-gray-200 bg-white text-black text-body2"
                    }`}
                >
                  {label}
                  {on ? (
                    <Check className="h-8 w-8" />
                  ) : (
                    <UnCheck className="h-8 w-8" />
                  )}
                </div>
              ))}
            </div>

            <div className="my-4 w-full border-t border-gray-200" />

            <div className="flex flex-col gap-2">
              <div className="text-body-sb text-black">
                <div className="text-heading2 flex items-center gap-2">
                  <Plant className="h-8 w-8" />
                  나의 감자
                </div>
                다음 텃밭을 열기까지{" "}
                <span className="text-primary-font">감자 {potatoCount}개</span>
                가 남았어요!
              </div>

              <div className="flex items-center gap-3">
                {Array.from({ length: 10 }).map((_, index) => (
                  <Potato
                    key={index}
                    className="h-6 w-6 transition-opacity"
                    style={{ opacity: index < 10 - potatoCount ? 1 : 0.3 }}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* ==================== */}
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
