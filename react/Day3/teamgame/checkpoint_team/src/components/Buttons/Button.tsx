import "./Button.css";

type buttonTypes = "default" | "primary" | "danger";

export type ButtonProps = {
  text: string;
  callback: () => void;
  buttonType?: buttonTypes;
  disabled?: boolean;
};

const Button = ({
  text,
  callback,
  buttonType = "default",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      data-testid="myBtn"
      className={`btn ${buttonType}-btn`}
      onClick={callback}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
