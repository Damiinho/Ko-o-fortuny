import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { AppContext } from "./contexts/AppContext";

const Wheel = () => {
  const { wheelValues, currentValue, setCurrentValue } = useContext(AppContext);

  const [spinning, setSpinning] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const spinIntervalRef = React.useRef(null);

  const handleWheel = () => {
    if (spinning) {
      const spinsToStop = Math.floor(Math.random() * 4) + 3; // Losowo od 3 do 6 obrotów
      setIsDisabled(true);
      setTimeout(() => {
        clearInterval(spinIntervalRef.current);
        setSpinning(false);
        console.log("Zatrzymano koło");
      }, spinsToStop * 100);
    } else {
      // Jeśli koło nie kręci się, rozpocznij kręcenie
      setSpinning(true);
      spinIntervalRef.current = setInterval(() => {
        setCurrentValue((prevValue) => (prevValue + 1) % wheelValues.length);
      }, 100);
    }
  };

  return (
    <div>
      <div>{wheelValues[currentValue]}</div>
      <Button onClick={handleWheel} variant="contained" disabled={isDisabled}>
        {spinning ? "Zatrzymaj" : "Losuj"}
      </Button>
    </div>
  );
};

export default Wheel;
