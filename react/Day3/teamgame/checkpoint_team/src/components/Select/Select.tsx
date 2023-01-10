import { PlayerColor } from "../../App";
import "./Select.css";

type SelectProps = {
  value: PlayerColor;
  options: PlayerColor[];
  setValue: (value: PlayerColor) => void;
  label: string;
};

const Select = ({ value, options, setValue, label }: SelectProps) => {
  return (
    <div>
      <label className="select-label">{label}</label>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value as PlayerColor)}
      >
        {options.map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
