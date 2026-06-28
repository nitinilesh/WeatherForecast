import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import weatherIcon from "../../Assets/weather-icon.png";
import "./Header.css";
// import SearchBar from "../../Components/SearchBar/SearchBar";

export default function Header() {
  const [currentTime, setCurrentTime] = useState(() => new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="header-container">
      <div className="header-left">
        <HiMenu id="menu-icon" />
        <img src={weatherIcon} alt="Weather Icon" className="weather-icon" />

        <div className="header-title">
          <h5>Forecast India</h5>
          <p>Real-time Weather Updates for All Indian states</p>
        </div>
      </div>
      <div className="header-right" id="header-right">
        <div className="date-time">
          <p id="date">{currentTime.toLocaleDateString()}</p>
          <p id="time">{currentTime.toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  );
}
