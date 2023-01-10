import { Player } from "../../App";
import { capitalize } from "../../utils";
import { Button, Table } from "../index";

type PlayerTableProps = {
  players: Player[];
  deletePlayer: (id: number) => void;
  disabled: boolean;
};

const PlayerTable = ({ players, deletePlayer, disabled }: PlayerTableProps) => {
  const createTableRows = (
    players: Player[],
    deletePlayer: (id: number) => void,
    disabled: boolean
  ) => {
    const DeleteButton = (id: number, disabled: boolean) => {
      return (
        <Button
          text="Delete"
          buttonType="danger"
          callback={() => deletePlayer(id)}
          disabled={disabled}
        />
      );
    };

    const rows = players.map((player) => {
      const Button = DeleteButton(player.id, disabled);
      return [player.name, capitalize(player.color), player.score, Button];
    });
    return rows;
  };

  const headers = ["Name", "Team", "Score"];
  const rows = createTableRows(players, deletePlayer, disabled);

  return <Table headers={headers} rows={rows}></Table>;
};

export default PlayerTable;
