import "./Input.css";

type InputProps = {
  value: string;
  changeValue: (value: string) => void;
  label: string;
};

const Input = ({ value, changeValue, label }: InputProps) => {
  return (
    <>
      <label className="input-label">{label}</label>
      <input
        value={value}
        onChange={(e) => changeValue(e.target.value)}
      ></input>
    </>
  );
};

export default Input;
