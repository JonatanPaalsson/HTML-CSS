import logo from "./logo.svg";
import "./App.css";

import { Button, PrimaryButton } from "./components";

type AppProps = { someString: string };

const App = () => {
  let counter = 0;

  const myFunction = () => {
    console.log("hello");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button
          text="btn"
          callback={myFunction}
          style={{ backgroundColor: "green", margin: "46px" }}
        ></Button>
        <PrimaryButton text="myButton" callback={myFunction}></PrimaryButton>
      </header>
    </div>
  );
};

export default App;
