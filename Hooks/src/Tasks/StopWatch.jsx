import { useEffect, useState } from "react";

function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setSeconds(0);
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleResume = () => {
    if (seconds > 0) setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

 const formatTime = (totalSeconds) => {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const secs = String(totalSeconds % 60).padStart(2, "0");

  return `${hours}:${mins}:${secs}`;
};
  return (
    <>
      <h1>{formatTime(seconds)}</h1>
      <button onClick={handleStart} >
        Start
      </button>
      <button onClick={handlePause} >
        Pause
      </button>
      <button onClick={handleResume} >
        Resume
      </button>
      <button onClick={handleReset} >
        Reset
      </button>
    </>
  );
}

export default StopWatch;
