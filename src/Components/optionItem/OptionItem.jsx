import { MdChevronRight } from "react-icons/md";
import "./OptionItem.css";
export default function OptionItem({ label, icon, isActive, onClick }) {
  return (
    <button
      className={`option-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="option-item-content">
        <div>{icon}</div>
        <span>{label}</span>
      </div>
      {isActive && <MdChevronRight />}
    </button>
  );
}
