import { useState } from "react";
import OptionItem from "../../Components/optionItem/OptionItem";
import { GoHome } from "react-icons/go";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOnlinePrediction, MdOutlineEventNote } from "react-icons/md";
import { TbMapPin } from "react-icons/tb";
import { MdOutlineCrisisAlert } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import "./SideBar.css";
export default function SideBar() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const menuItems = [
    { label: "Dashboard", icon: <GoHome /> },
    { label: "India Weather", icon: <TiWeatherPartlySunny /> },
    { label: "Forecast", icon: <MdOnlinePrediction /> },
    { label: "Historical Data", icon: <MdOutlineEventNote /> },
    { label: "Weather Maps", icon: <TbMapPin /> },
    { label: "Alerts", icon: <MdOutlineCrisisAlert /> },
    { label: "Settings", icon: <CiSettings /> },
  ];
  return (
    <div className="sidebar-container">
      <div className="sidebar-list">
        {menuItems.map((item) => {
          const isActive = activeItem === item.label;
          return (
            <OptionItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              isActive={isActive}
              onClick={() => setActiveItem(item.label)}
            />
          );
        })}
      </div>
    </div>
  );
}
