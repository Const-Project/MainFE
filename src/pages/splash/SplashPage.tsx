const SplashPage = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="w-[394px] h-[852px] bg-white  flex flex-col relative">
        <div className="flex-grow flex justify-center items-center">
          <h1 className="text-[210%] font-bold text-black">나풀나풀</h1>
        </div>
        <div className="absolute bottom-10 w-full">
          <p className="text-sm text-black text-center">
            슬로건입니다. 더미텍스트입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
