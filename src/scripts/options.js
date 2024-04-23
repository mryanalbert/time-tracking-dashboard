import data from "../../data.json";

export default function options() {
  let timeframes = data[0].timeframes;
  let timeframesArr = [];

  for (let key in timeframes) {
    timeframesArr.push(key);
  }
  return timeframesArr;
}
