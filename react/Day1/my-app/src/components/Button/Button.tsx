import "./Button.css";

type ButtonProps = {
  text: string;
  callback: () => void;
  style?: React.CSSProperties;
};

export const Button = ({ text, callback, style }: ButtonProps) => {
  return (
    <button style={style} data-testid="myBtn" onClick={callback}>
      {text}
    </button>
  );
};

export const PrimaryButton = ({ text, callback }: ButtonProps) => {
  return (
    <button className="primary-button" onClick={callback}>
      {text}
    </button>
  );
};
