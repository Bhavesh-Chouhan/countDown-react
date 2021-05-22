import "./App.css";
import { useState } from "react";

function App() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const lDate = new Date("May 20 , 2021 00:00:00 ").getTime();

  const setTimer = () => {
    setInterval(() => {
      const now = new Date().getTime();
      const gap = lDate - now;
      const days = Math.floor(gap / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((gap % (1000 * 60)) / 1000);
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
      // if (gap < 0) {

      // } else {
      //   setTimerDays(days);
      //   setTimerHours(hours);
      //   setTimerMinutes(minutes);
      //   setTimerSeconds(seconds);
      // }
    }, 1000);
  };
  setTimer();
  return (
    <div className="timer-container">
      <h1>We are going to open.</h1>
      <div className="timer">
        <div className="Days">
          <h2>{timerDays}</h2>
          <p>Days</p>
        </div>
        <span>:</span>
        <div className="Hours">
          <h2>{timerHours}</h2>
          <p>Hours</p>
        </div>
        <span>:</span>
        <div className="Minutes">
          <h2>{timerMinutes}</h2>
          <p>Minutes</p>
        </div>
        <span>:</span>
        <div className="Seconds">
          <h2>{timerSeconds}</h2>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
}

export default App;
