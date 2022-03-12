import React, { useState } from "react";
import "./App.scss";
import {
  DECIDE_VIEW,
  DEFAULT_FOOD_URL,
  RESULT_VIEW,
  UPLOAD_VIEW,
} from "./constants";
import DecideView from "./components/DecideView";
import Container from "react-bootstrap/Container";
import ResultView from "./components/ResultView";

function App() {
  const [userFoodUrl] = useState(DEFAULT_FOOD_URL);
  return (
    <div className="App">
      <div className="App-body">
        <Container>
          <Router userFoodUrl={userFoodUrl} />
        </Container>
      </div>
    </div>
  );
}

const Router = ({ userFoodUrl }) => {
  const [view, setView] = useState(DECIDE_VIEW);
  const [args, setArgs] = useState({ userFoodUrl });
  switch (view) {
    case UPLOAD_VIEW:
      break;
    case DECIDE_VIEW:
      return <DecideView {...args} setArgs={setArgs} setView={setView} />;
    case RESULT_VIEW:
      return <ResultView {...args} setArgs={setArgs} setView={setView} />;
    default:
      return <div />;
  }
};

export default App;
