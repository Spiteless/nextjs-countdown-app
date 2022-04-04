import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";

export default function Timer({ timestamp }) {
  const [targetTime, setTimer] = useState(moment());
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));
  const [runCount, setRunCount] = useState(0);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    setTimer(moment(router.query.t));
    console.log(`Timer use effect: ${runCount}`);
    setRunCount(runCount + 1);
  }, [router.isReady]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const outputString = () => {
    const data = [
      [timeBetween.years(), "Years"],
      [timeBetween.months(), "Months"],
      [timeBetween.days(), "Days"],
      [timeBetween.hours(), "Hours"],
      [timeBetween.minutes(), "Minutes"],
      [timeBetween.seconds(), "Seconds"],
    ];
    return data.filter((val) => val[0] > 0);
  };

  return (
    <div>
      <h2 className="counter">
        {outputString().map((vals) => {
          const [num, text] = vals;
          return (
            <span key={`${text}${num}`}>
              {num} {text}{" "}
            </span>
          );
        })}
      </h2>
    </div>
  );
}
