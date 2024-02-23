import Instructions from "./instructions/Instructions";
import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    let timer;
    if (isOn) {
      timer = setTimeout(() => {
        setIsOn(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isOn]);

  function toggleLightBulb() {
    if (isOn === false) {
      setCounter(counter - 1);
    }
    setIsOn(!isOn);
  }

  return (
    <div className="App">
      <Instructions />
      {counter > -1 ? (
        <div className={isOn ? "block night" : "block"}>
          <button onClick={toggleLightBulb}>
            {isOn ? "Turn me off" : "Turn me on!"}
          </button>
          <div className="container">
            <div className="bulb-light">
              <div id="light" />

              <div id="bulb">
                <div className="bulb-top">
                  <div className="reflection" />
                </div>
                <div className="bulb-middle-1" />
                <div className="bulb-middle-2" />
                <div className="bulb-middle-3" />
                <div className="bulb-bottom" />
              </div>

              <div id="base">
                <div className="screw-top" />
                <div className="screw-a" />
                <div className="screw-b" />
                <div className="screw-a" />
                <div className="screw-b" />
                <div className="screw-a" />
                <div className="screw-b" />
                <div className="screw-c" />
                <div className="screw-d" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Use A Candle!</p>
      )}
    </div>
  );
}
