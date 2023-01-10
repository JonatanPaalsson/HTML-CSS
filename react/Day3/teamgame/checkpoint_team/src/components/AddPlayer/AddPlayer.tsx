import { PlayerColor } from "../../App";
import { Button, Input, Select } from "../index";

type AddPlayerProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  playerColor: PlayerColor;
  setPlayerColor: (color: PlayerColor) => void;
  addPlayer: () => void;
  disabled: boolean;
  options: PlayerColor[];
};

const AddPlayer = ({
  inputValue,
  setInputValue,
  playerColor,
  setPlayerColor,
  addPlayer,
  disabled,
  options,
}: AddPlayerProps) => {
  return (
    <div>
      <Input
        label="Player name"
        value={inputValue}
        changeValue={(e) => {
          setInputValue(e);
        }}
      ></Input>
      <Select
        label="Player team"
        value={playerColor}
        options={options}
        setValue={(e) => setPlayerColor(e)}
      ></Select>

      <Button
        disabled={disabled || inputValue === ""}
        text="Add player"
        callback={addPlayer}
      ></Button>
    </div>
  );
};

export default AddPlayer;
