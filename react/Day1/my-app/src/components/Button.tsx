type ButtonProps = {
  text: string;
  callback: () => void;
};

const Button = ({ text, callback }: ButtonProps) => {
  return <button onClick={callback}>{text}</button>;
};

export default Button;
