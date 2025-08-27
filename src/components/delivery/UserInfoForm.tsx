const UserInfo: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      <h2 className="text-lg font-semibold">받는 분 정보</h2>

      <div className="flex flex-col border-b border-gray-300 py-2 gap-0.25">
        <label className="text-sm text-gray-500 " htmlFor="name">
          성함
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="성함을 입력해주세요"
          className=" placeholder: text-gray-400 placeholder:text-body2 text-body2"
        />
      </div>

      <div className="flex flex-col border-b border-gray-300 py-2 gap-0.25">
        <label className="text-sm text-gray-500 " htmlFor="phone">
          전화번호
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="전화번호를 입력해주세요"
          className=" placeholder: text-gray-400 placeholder:text-body2"
        />
      </div>
    </div>
  );
};

export default UserInfo;
