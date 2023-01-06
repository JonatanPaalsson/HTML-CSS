import "./Button.css";

type ButtonProps = {
  text: string;
  callback: () => void;
};

export const Button = ({ text, callback }: ButtonProps) => {
  return <button onClick={callback}>{text}</button>;
};

export const PrimaryButton = ({ text, callback }: ButtonProps) => {
  return <button onClick={callback}>{text}</button>;
};
