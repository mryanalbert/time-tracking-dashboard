import Ellipsis from "../assets/images/icon-ellipsis.svg";

const Card = ({ title, timeframes, timeFrameOption, icon, bgColor }) => {
  const pastSchedule = () => {
    let pastSched = "";

    if (timeFrameOption === "daily") {
      pastSched = "Yesterday";
    } else if (timeFrameOption === "weekly") {
      pastSched = "Last Week";
    } else {
      pastSched = "Last Month";
    }
    return pastSched;
  };

  const style = {
    backgroundImage: `url(${icon})`,
    backgroundColor: bgColor,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "90% -10px",
    backgroundSize: "90px",
  };

  return (
    <div className="item rounded-3xl" style={{ backgroundColor: bgColor }}>
      <div
        className="icon-img bg-right-top h-9 sm:h-11 rounded-2xl"
        style={style}
      ></div>
      <div className="card bg-dark-blue rounded-2xl cursor-pointer px-7 py-5 sm:p-7 h-[auto]">
        <div className="card-header flex justify-between items-center">
          <div className="card-title font-medium">{title}</div>
          <img src={Ellipsis} alt="" />
        </div>
        <div className="flex items-center justify-between mt-2 sm:flex-col sm:items-start sm:justify-start ms:mt-0">
          <p className="current-hours text-3xl sm:text-5xl font-thin sm:mt-7">
            {timeframes[timeFrameOption].current}hrs
          </p>
          <p className="font-thin sm:mt-3 text-pale-blue text-sm sm:text-lg">
            <span className="text-pale-blue text-sm sm:text-lg">
              {pastSchedule()}
            </span>{" "}
            - {timeframes[timeFrameOption].previous}
            hrs
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
