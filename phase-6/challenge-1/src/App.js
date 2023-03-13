import React, { useState } from "react";

function App() {
  const [nestedObject, setNestedObject] = useState({
    taxi: "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
      },
    },
  });

  return (
    <div style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
      <DisplayNested nestedObject={nestedObject} />
    </div>
  );
}



const DisplayNested = ({ nestedObject }) => {
  return (
    // YOUR CODE HERE

  );
};

export default App;