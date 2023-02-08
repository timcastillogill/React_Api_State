import React, { useEffect, useState } from "react";
import Button from "../ui/Button";

const CatFact = () => {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => setCatFact(data.fact));
  }, []);

  return (
    <div className="App">
      <p>{catFact}</p>
      <Button
        className={"Submit"}
        type={"button"}
        text={"Get me a Cat Fact"}
      ></Button>
    </div>
  );
};

export default CatFact;
