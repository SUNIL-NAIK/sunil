import React from "react";
import ReactDOM from "react-dom/client";
import Ruler from "./Components/Fasterflex";
import Portfolio from "./Components/Portfolio"
import JustFun from "./Components/Body";
import MiddleContent from "./Components/MiddleContent";
import Kongo from "./Components/Extrass";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
  <JustFun/>
  <MiddleContent/>
  <Kongo/>
        <Portfolio/>
       
        <Ruler/>
        
    </React.Fragment>
);