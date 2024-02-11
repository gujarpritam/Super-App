import React from "react";
import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const incrementHour = () => {
    setHours(hours + 1);
  };
  const decrementHour = () => {
    if (hours === 0) return;
    setHours(hours - 1);
  };
  const incrementMinute = () => {
    if (minutes === 59) {
      incrementHour();
      setMinutes(0);
      return;
    }
    setMinutes(minutes + 1);
  };

  const decrementMinute = () => {
    if (minutes === 0) {
      if (hours === 0) return;
      decrementHour();
      setMinutes(59);
      return;
    }
    setMinutes(minutes - 1);
  };

  const incrementSecond = () => {
    if (seconds === 59) {
      incrementMinute();
      setSeconds(0);
      return;
    }
    setSeconds(seconds + 1);
  };

  const decrementSecond = () => {
    if (seconds === 0) {
      if (minutes === 0) {
        if (hours === 0) return;
        decrementHour();
        setMinutes(59);
        setSeconds(59);
        return;
      }

      decrementMinute();
      setSeconds(59);
      return;
    }
    setSeconds(seconds - 1);
  };

  // const renderTime =

  return (
    <>
      <div>
        <h1>Timer</h1>
        <button onClick={incrementHour}>hours ++</button>
        <button onClick={decrementHour}>hours --</button>
        <button onClick={incrementMinute}>minutes ++</button>
        <button onClick={decrementMinute}>minutes --</button>
        <button onClick={incrementSecond}>seconds ++</button>
        <button onClick={decrementSecond}>seconds --</button>
      </div>
      <div>
        hours: {hours} minutes: {minutes} seconds: {seconds}
      </div>

      {/*
       */}

      {isPlaying ? (
        <button onClick={() => setIsPlaying(false)}>Pause</button>
      ) : (
        <>
          <button onClick={() => setIsPlaying(true)}>Start</button>
        </>
      )}

      <button
        onClick={() => {
          setHours(0);
          setMinutes(0);
          setSeconds(0);
        }}
      >
        Reset
      </button>

      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={hours * 3600 + minutes * 60 + seconds}
        colors="#FF0000"
        // colorsTime={[7, 5, 2, 0]}
        onComplete={() => {
          // do your stuff here

          setIsPlaying(false);

          return { shouldRepeat: false, delay: 0, newInitialRemainingTime: 0 }; // repeat animation in 1.5 seconds
        }}
      >
        {({ remainingTime }) => {
          if (remainingTime <= 0) {
            remainingTime = 0;
            return remainingTime;
          }
          return remainingTime;
        }}
      </CountdownCircleTimer>
    </>
  );
}

export default Timer;
