import { PlayerColor } from "../../App";
import { capitalize } from "../../utils";
import Button from "./Button";

type ButtonGroupProps = {
  givePoints: (team: PlayerColor) => void;
  teams: PlayerColor[];
  disabled: boolean;
};

const ButtonGroup = ({ givePoints, teams, disabled }: ButtonGroupProps) => {
  const getRandomTeam = (colors: PlayerColor[]) => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      {teams.map((team) => {
        return (
          <Button
            key={team}
            text={`Team ${capitalize(team)}`}
            disabled={disabled}
            callback={() => givePoints(team)}
          ></Button>
        );
      })}
      <Button
        text="Random"
        callback={() => givePoints(getRandomTeam(teams))}
        disabled={disabled}
      ></Button>
    </div>
  );
};

export default ButtonGroup;
