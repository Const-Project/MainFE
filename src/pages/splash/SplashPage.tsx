const SplashPage = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col relative">
      <div className="flex-grow flex justify-center items-center">
        <h1 className="text-[9vw] md:text-8xl font-bold text-black">
          나풀나풀
        </h1>
      </div>
      <div className="absolute bottom-10 w-full">
        <p className="text-[4vw] md:text-2xl text-gray-500 text-center">
          슬로건입니다. 더미텍스트입니다.
        </p>
      </div>
    </div>
  );
};

export default SplashPage;
