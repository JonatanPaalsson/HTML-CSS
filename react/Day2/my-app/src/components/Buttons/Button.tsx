import "./Button.css";

type buttonTypes = "default" | "primary" | "danger";

export type ButtonProps = {
  text: string;
  callback: () => void;
  buttonType?: buttonTypes;
};

const Button = ({ text, callback, buttonType = "default" }: ButtonProps) => {
  return (
    <button
      data-testid="myBtn"
      className={`btn ${buttonType}-btn`}
      onClick={callback}
    >
      {text}
    </button>
  );
};

export default Button;
