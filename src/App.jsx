import JeremyImg from "./assets/images/image-jeremy.png";
import trackings from "../data.json";
import Options from "./components/Options";
import options from "./scripts/options";
import { useState } from "react";
import CardList from "./components/CardList";

export default function App() {
  const [timeFrameOption, setTimeFrameOption] = useState("daily");
  // console.log(timeFrameOption);

  return (
    <div className="wrapper flex items-center justify-center min-h-screen bg-very-dark-blue p-3 md:p-10">
      <div className="tracker gap-4 md:gap-8 w-[1300px]">
        <div className="menu row-span-2 bg-dark-blue rounded-2xl">
          <div className="owner bg-blue rounded-2xl px-7 py-5 sm:p-7 sm:pb-20 flex gap-4 sm:gap-0 items-center sm:items-start sm:flex-col">
            <img
              src={JeremyImg}
              className="w-12 h-12 sm:w-24 sm:h-24 border-white sm:border-4 border-[3px] rounded-full"
              alt=""
            />
            <div className="report-for-owner sm:mt-8">
              <p className="text-pale-blue text-sm sm:text-lg">Report for</p>
              <p className="text-xl sm:text-4xl font-thin mt-0 sm:mt-2">
                Jeremy Robson
              </p>
            </div>
          </div>
          <div className="options bg-dark-blue flex justify-between sm:justify-start sm:flex-col sm:items-start px-7 py-3 sm:p-7 rounded-2xl">
            <Options
              optionsArr={options()}
              setTimeFrameOption={setTimeFrameOption}
              timeFrameOption={timeFrameOption}
            />
          </div>
        </div>
        <CardList trackings={trackings} timeFrameOption={timeFrameOption} />
      </div>
    </div>
  );
}
