import React, { useState } from "react";
import "./App.scss";
import { DEFAULT_FOOD_URL, ROBBING_WATERMELON_URL } from "./constants";
import CardIsBadFood from "./components/CardIsBadFood";

function App() {
  const [userFoodUrl] = useState(DEFAULT_FOOD_URL);
  return (
    <div className="App">
      <div className="App-body">
        <CardIsBadFood
          userFoodUrl={userFoodUrl}
          badFoodUrl={ROBBING_WATERMELON_URL}
        />
      </div>
    </div>
  );
}

export default App;
