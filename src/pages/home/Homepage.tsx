import QueryTest from "@/components/QueryTest";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Hanium Frontend</h1>

        {/* TanStack Query 테스트 컴포넌트 */}
        <QueryTest />
      </div>
    </div>
  );
};

export default Homepage;
