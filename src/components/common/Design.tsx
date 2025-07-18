const Design = () => {
  return (
    <div className="overflow-auto-hide-scroll h-full">
      <div>
        <h1 className="text-title0">design system</h1>
        <h2 className="text-title1">grayscale</h2>
        <div className="flex">
          <div className="bg-black h-20 w-20"></div>
          <div className="bg-gray-800 h-20 w-20"></div>
          <div className="bg-gray-600 h-20 w-20"></div>
          <div className="bg-gray-400 h-20 w-20"></div>
          <div className="bg-white h-20 w-20"></div>
        </div>
        <h2 className="text-heading1">main/sub color</h2>
        <div className="flex">
          <div className="bg-primary h-20 w-20"></div>
          <div className="bg-primary-varient h-20 w-20"></div>
          <div className="bg-primary-font h-20 w-20"></div>
          <div className="bg-danger h-20 w-20"></div>
          <div className="bg-danger-varient h-20 w-20"></div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-title0">title0</p>
        <p className="text-title1">title1</p>
        <p className="text-heading1">heading1</p>
        <p className="text-heading2">heading2</p>

        <p className="text-body1">body1</p>
        <p className="text-body2">body2</p>
        <p className="text-body-sb">body-sb</p>
      </div>
    </div>
  );
};

export default Design;
