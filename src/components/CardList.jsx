import Card from "./Card";
import WorkIcon from "../assets/images/icon-work.svg";
import PlayIcon from "../assets/images/icon-play.svg";
import StudyIcon from "../assets/images/icon-study.svg";
import ExerciseIcon from "../assets/images/icon-exercise.svg";
import SocialIcon from "../assets/images/icon-social.svg";
import SelfCareIcon from "../assets/images/icon-self-care.svg";

const CardList = ({ trackings, timeFrameOption }) => {
  const colorsAndIcons = [
    {
      icon: WorkIcon,
      bgColor: "#ff8c66",
    },
    {
      icon: PlayIcon,
      bgColor: "#56c2e6",
    },
    {
      icon: StudyIcon,
      bgColor: "#ff5c7c",
    },
    {
      icon: ExerciseIcon,
      bgColor: "#4acf81",
    },
    {
      icon: SocialIcon,
      bgColor: "#7536d3",
    },
    {
      icon: SelfCareIcon,
      bgColor: "#f1c65b",
    },
  ];

  return (
    <>
      {trackings.map(({ title, timeframes }, i) => (
        <Card
          key={title}
          title={title}
          timeframes={timeframes}
          timeFrameOption={timeFrameOption}
          icon={colorsAndIcons[i].icon}
          bgColor={colorsAndIcons[i].bgColor}
        />
      ))}
    </>
  );
};
export default CardList;
