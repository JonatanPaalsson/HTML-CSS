import { Button } from "../index";

type WinnerProps = {
  isShowing: boolean;
  playerName: string;
  reset: () => void;
};

const Winner = ({ playerName, reset, isShowing }: WinnerProps) => {
  if (!isShowing) return null;

  return (
    <>
      <p>We have a winner!</p>
      <h4>{playerName}</h4>
      <Button text="Play again" callback={reset} />
    </>
  );
};

export default Winner;
