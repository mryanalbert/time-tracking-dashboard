const Options = ({ optionsArr, setTimeFrameOption, timeFrameOption }) => {
  const optionTextColorFunc = (op) => {
    let optionTextColor = "";

    if (timeFrameOption === op) {
      optionTextColor = "text-white";
    } else {
      optionTextColor = "text-pale-blue";
    }
    return optionTextColor;
  };

  return (
    <>
      {optionsArr.map((op) => (
        <button
          key={op}
          onClick={() => setTimeFrameOption(op)}
          className={`capitalize sm:mt-3 sm:first:mt-0 ${optionTextColorFunc(
            op
          )}`}
        >
          {op}
        </button>
      ))}
    </>
  );
};
export default Options;
