import { useEffect, useState } from "react";
import "./App.css";
import { AddPlayer, PlayerTable, ButtonGroup, Winner } from "./components";
import { generateRandomLargeNumber } from "./utils";

export const teams = ["blue", "red", "yellow", "green"] as const;

export type PlayerColor = typeof teams[number];

export type Player = {
  name: string;
  color: PlayerColor;
  score: number;
  id: number;
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [playerColor, setPlayerColor] = useState<PlayerColor>("blue");
  const [players, setPlayers] = useState<Player[]>([]);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    if (players.length > 0 && players[0].score > 4) {
      setWinner(true);
    }
  }, [players]);

  const addPlayer = () => {
    const newPlayer: Player[] = [
      {
        name: inputValue,
        score: 0,
        color: playerColor,
        id: generateRandomLargeNumber(),
      },
    ];
    setPlayers(players.concat(newPlayer));
    setInputValue("");
    setPlayerColor("blue");
  };

  const deletePlayer = (id: number) => {
    const filteredArray = players.filter((player) => {
      return player.id !== id;
    });
    setPlayers(filteredArray);
  };

  const givePoints = (team: PlayerColor) => {
    const playersCopy = [...players];
    playersCopy.forEach((player) => {
      if (player.color === team) {
        player.score++;
      }
    });

    playersCopy.sort((a, b) => b.score - a.score);
    setPlayers(playersCopy);
  };

  const reset = () => {
    setInputValue("");
    setPlayerColor("blue");
    setPlayers([]);
    setWinner(false);
  };

  return (
    <div className="App">
      <div className="Container">
        <h1>Welcome to my awesome team game!</h1>

        <p>
          Here is my new awesome team game. Here you can add players and make
          them part of a team. Then you are able to give points to any team you
          like by pressing the buttons in the bottom. Each player in the team
          will then score point. If you can't decide on which is your favorite
          team then you can press the Random button to give to any team.
        </p>
        <p>
          The table in the middle should display who has the most points by
          sorting the table. Here you are also able to remove a player from the
          game if you want to
        </p>
        <p>
          Once a player has recieved 5 points then the game is ower and that
          person will be celebrated and you are able to play again. Try it out
          for yourself!
        </p>

        <h3>Add a new Player</h3>
        <AddPlayer
          addPlayer={addPlayer}
          inputValue={inputValue}
          setInputValue={setInputValue}
          playerColor={playerColor}
          setPlayerColor={setPlayerColor}
          disabled={winner}
          options={[...teams]}
        ></AddPlayer>

        <PlayerTable
          players={players}
          deletePlayer={deletePlayer}
          disabled={winner}
        />

        <h3>Give points to any team!</h3>

        <ButtonGroup
          disabled={winner}
          givePoints={givePoints}
          teams={[...teams]}
        />

        <Winner
          isShowing={winner}
          playerName={players[0]?.name}
          reset={reset}
        ></Winner>
      </div>
    </div>
  );
}

export default App;
