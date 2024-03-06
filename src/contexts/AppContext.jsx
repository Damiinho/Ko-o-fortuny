import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [entries, setEntries] = useState([
    { id: 0, name: "Koło zamachowe", category: "Maszyneria", used: false },
    {
      id: 1,
      name: "Trójkąt równoramienny",
      category: "Matematyka",
      used: false,
    },
  ]);
  const [wheelValues, setWheelValues] = useState([
    25,
    325,
    75,
    475,
    150,
    275,
    175,
    200,
    "Bankrut",
    225,
    300,
    375,
    1000,
    50,
    350,
    400,
    "Stop",
    100,
    425,
    250,
    450,
    500,
    125,
    2000,
  ]);
  const [currentValue, setCurrentValue] = useState(0);
  // const [numberOfWheel, setNumberOfWheel] = useState(0);

  const providerValue = {
    windowWidth,
    entries,
    setEntries,
    wheelValues,
    setWheelValues,
    currentValue,
    setCurrentValue,
    // numberOfWheel,
    // setNumberOfWheel,
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
