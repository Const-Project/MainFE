import { useMemo, useState } from "react";

import LogCalender from "@/components/log/LogCalender";

import { createMockMonthlyCalendar } from "@/mocks/log/monthlyCalendar";

type Tab = "potato" | "diary"; // 감자 / 일기

const LogPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("potato");

  const initialData = useMemo(() => {
    const now = new Date();
    return createMockMonthlyCalendar(now.getFullYear(), now.getMonth() + 1);
  }, []);

  const [calendarData, setCalendarData] = useState(initialData);

  return (
    <section className="w-full py-5">
      {/* 헤더 */}
      <h1 className="mb-6 text-center text-heading2">키움 일지</h1>

      {/* 토글: 감자 / 일기 */}
      <div className="mb-4 flex w-full justify-center">
        <div className="flex w-full px-1">
          <button
            className={`flex-1 pb-2 text-center text-body1 ${
              activeTab === "potato"
                ? "text-black border-b-2 border-primary"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("potato")}
          >
            감자
          </button>

          <button
            className={`flex-1 pb-2 text-center text-body1 ${
              activeTab === "diary"
                ? "text-black border-b-2 border-primary"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("diary")}
          >
            일기
          </button>
        </div>
      </div>

      {/* 콘텐츠 */}
      {activeTab === "potato" ? (
        <LogCalender
          data={calendarData}
          onMonthChange={(y, m) =>
            setCalendarData(createMockMonthlyCalendar(y, m))
          }
          onSelectDate={() => {}}
        />
      ) : (
        <div className="px-4 py-8 text-center text-body2 text-gray-600">
          일기 컴포넌트 준비 중입니다.
        </div>
      )}
    </section>
  );
};

export default LogPage;
