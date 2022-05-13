import { useEffect, useState } from "react";
import moment from "moment";

import { useCountdown } from "@context/AppContext";

import TimerDisplay from "./TimerDisplay";

export default function Timer(props) {
  const { countdown, app } = useCountdown();

  let target = moment(countdown.queryDate);
  const diff = target.diff(moment());
  const duration = moment.duration(diff);

  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    target = moment(countdown.queryDate);
  }, [countdown.query]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const outputString = (diff) => {
    if (!!diff) {
      return data.filter((val) => val[0] > 0);
    }
    return [];
  };

  const data = {
    start: currentTime,
    end: target,
    diff: diff,
    duration: duration,
    years: duration.years(),
    months: duration.months(),
    days: duration.days(),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
    statement: target.format("dddd, MMMM Do YYYY, h:mm:ss a"),
    timeleft: moment.utc(diff).format("HH:MM:ss"),
  };

  return <TimerDisplay data={data} />;
}
