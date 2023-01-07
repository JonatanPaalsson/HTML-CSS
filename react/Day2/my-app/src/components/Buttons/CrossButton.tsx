import "./Button.css";

export type ButtonProps = {
  callback: () => void;
};

const CrossButton = ({ callback }: ButtonProps) => {
  return (
    <button
      data-testid="cross-Btn"
      className=".btn cross-btn"
      onClick={callback}
    >
      X
    </button>
  );
};

export default CrossButton;
