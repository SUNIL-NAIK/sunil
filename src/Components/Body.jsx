import React, { useState, useEffect } from "react";
import './Body.css';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every 1000 milliseconds (1 second)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return <div className="Clomk">{formattedTime}</div>;
}

const JustFun = () => {
  return (
    <React.Fragment>
        <div className="Clock" align ="right">
          <Clock />
        </div>
      <div className="Gill">
        <div className="Greetings">
          <h1>Hola amigo,</h1>
          <h2>You are welcome here.</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JustFun;
