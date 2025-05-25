import { useEffect, useState } from "react";

const TimeLeftCountDown = ({ date, startTime, endTime }) => {
  const [timeLeftDisplay, setTimeLefDisplay] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = Date.now();
      const newDate = new Date(currentDate);
      const addTimeOnDate = (timeToBeAdded, theDateToBeAddedUpOn) => {
        const timeArray = timeToBeAdded.split(":");
        const hour = timeArray[0];
        const minute = timeArray[1];
        theDateToBeAddedUpOn.setHours(hour);
        theDateToBeAddedUpOn.setMinutes(minute);
      };

      const parsedFutureDate = new Date(date);
      addTimeOnDate(startTime, newDate);
      addTimeOnDate(endTime, parsedFutureDate);

      const timeLeft = (parsedFutureDate.getTime() - currentDate) / 1000;

      const timeLeftStandardFormat = {
        days: Math.floor(timeLeft / (3600 * 24)),
        hours: Math.floor((timeLeft % (3600 * 24)) / 3600),
        minutes: Math.floor((timeLeft % 3600) / 60),
        seconds: Math.floor(timeLeft % 60),
      };

      setTimeLefDisplay(timeLeftStandardFormat);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {timeLeftDisplay.days <= 1
        ? `${timeLeftDisplay.days} day `
        : `${timeLeftDisplay.days} days `}
      {timeLeftDisplay.hours <= 1
        ? `${timeLeftDisplay.hours} hour `
        : `${timeLeftDisplay.hours} hours `}
      {timeLeftDisplay.minutes <= 1
        ? `${timeLeftDisplay.minutes} minute `
        : `${timeLeftDisplay.minutes} minutes `}
      {timeLeftDisplay.seconds <= 1
        ? `${timeLeftDisplay.seconds} second `
        : `${timeLeftDisplay.seconds} seconds `}
    </div>
  );
};

export default TimeLeftCountDown;
