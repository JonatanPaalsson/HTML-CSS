type ButtonProps = {
  text: string;
  callback: () => void;
};

const Button = ({ text, callback }: ButtonProps) => {
  return (
    <button data-testid="myBtn" onClick={callback}>
      {text}
    </button>
  );
};

export default Button;
