import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { UserPlus } from "@/assets/icons/common";
import FeedList from "@/components/feed/FeedList";
import type { FeedResponse } from "@/types/feed";

import { createMockFeedResponse } from "@/mocks/feed/feed";

type Props = {
  onSelectPost?: (postId: number, postType: string) => void;
};

const FeedPage = ({ onSelectPost }: Props) => {
  const navigate = useNavigate();
  const [feedData, setFeedData] = useState<FeedResponse>({ result: [] });

  // Mock 데이터 사용 (백엔드 완성 후 제거)
  useEffect(() => {
    const mockData = createMockFeedResponse();
    setFeedData(mockData);
  }, []);

  const handleUserPlusClick = () => {
    navigate("/follow");
  };

  return (
    <section className="w-full pt-3">
      {/* 헤더 */}
      <div className="mb-3 flex items-center justify-between">
        <div className="w-6 ml-5"></div>
        <h1 className="text-heading2">둘러보기</h1>
        <button className="pr-5" onClick={handleUserPlusClick}>
          <UserPlus className="w-6 h-6" />
        </button>
      </div>

      {/* 둘러보기 사진 블록 */}
      <FeedList
        feedData={feedData}
        onSelectPost={onSelectPost}
        isLoading={false}
        error={null}
      />
    </section>
  );
};

export default FeedPage;
