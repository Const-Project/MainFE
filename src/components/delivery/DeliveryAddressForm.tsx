const DeliveryAddressForm: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      <h2 className="text-lg font-semibold">받는 분 정보</h2>
      <div className="flex flex-col gap-3">
        <div className="flex gap-0.25 flex-col border-b-1 border-gray-400 pb-1">
          <label className="block text-gray-600 text-sm">주소</label>
          <div>
            <div className="flex justify-between w-full gap-0.25">
              <input
                type="text"
                placeholder="우편번호를 입력해주세요"
                className="w-full placeholder: text-gray-400 placeholder:text-body2"
              />
              <button
                type="button"
                className="whitespace-nowrap bg-gray-200 text-gray-600 px-3 py-1 text-body-sb rounded-[8px]"
              >
                우편번호 찾기
              </button>
            </div>
          </div>
        </div>
        <textarea
          className="w-full border rounded-[8px]  text-body2 resize-none border-gray-400 bg-gray-200"
          rows={2}
        />
      </div>

      <div className="flex flex-col gap-3 border-b-1 border-gray-400 py-2">
        <label className="text-gray-600 text-sm">상세 주소</label>
        <input
          type="text"
          placeholder="주소를 입력해주세요"
          className="w-full rounded-lg text-sm placeholder: text-gray-400 placeholder:text-body2"
        />
      </div>
    </div>
  );
};

export default DeliveryAddressForm;
