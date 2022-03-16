import React, { useState, useEffect } from "react";
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
import axios from 'axios';

function App() {
  const [userFoodUrl] = useState(DEFAULT_FOOD_URL);
  const [foods, setFoods] = useState([])
  useEffect(()=>{
    axios.get("https://isitbadfood.herokuapp.com/api/foods/?format=json").then(res => {
      setFoods(res.data);
      console.log(res.data);
    })
  },[])
  return (
    <div className="App">
      <div className="App-body">
        <Container>
          <Router userFoodUrl={userFoodUrl} foods={foods} />
        </Container>
      </div>
    </div>
  );
}

const Router = ({ userFoodUrl, foods }) => {
  const [view, setView] = useState(DECIDE_VIEW);
  const [args, setArgs] = useState({ userFoodUrl });
  switch (view) {
    case UPLOAD_VIEW:
      break;
    case DECIDE_VIEW:
      return <DecideView foods={foods} {...args} setArgs={setArgs} setView={setView} />;
    case RESULT_VIEW:
      return <ResultView {...args} setArgs={setArgs} setView={setView} />;
    default:
      return <div />;
  }
};

export default App;
