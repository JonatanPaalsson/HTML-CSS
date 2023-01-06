type ButtonProps = {
  text: string;
  callback: () => void;
};

const Button = ({ text, callback }: ButtonProps) => {
  return <button onClick={callback}>{text}</button>;
};

const anotherButton = (props: ButtonProps) => {
  return <button onClick={props.callback}>{props.text}</button>;
};

export default Button;
