import { useState } from "react";
import { Button, Modal, Counter } from "./components";
import Context from "./contextExample/Context";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <header className="App-header">
        <Button
          text="Click me"
          callback={() => setIsModalOpen((currentValue) => !currentValue)}
        />
        <Modal
          title="This is my awesome modal"
          isOpen={isModalOpen}
          closeModal={() => {
            setIsModalOpen(false);
          }}
          buttons={[
            { text: "Cancel", callback: closeModal },
            { text: "Delete", buttonType: "danger", callback: closeModal },
          ]}
        >
          <div>Are you sure you want to delete?</div>
        </Modal>
        {/* <Counter></Counter> */}
        <Context></Context>
      </header>
    </div>
  );
}

export default App;
