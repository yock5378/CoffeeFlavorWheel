import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import AnimatedPieHooks from "../component/DonutChart";

const divStyle = {
    position: 'absolute',
    top: '150px',
    left: '128px'
};

function App() {
    const generateData = (value, length = 5) =>
      d3.range(length).map((item, index) => ({
        date: index,
        value: value === null || value === undefined ? Math.random() * 100 : value
      }));
  
    const [data, setData] = useState(generateData(0));
    const changeData = () => {
      setData(generateData());
    };
  
    useEffect(
      () => {
        setData(generateData());
      },
      [!data]
    );
  
    return (
      <div className="App">
        <div>
          <button onClick={changeData}>Transform</button>
        </div>
        <div>
          <AnimatedPieHooks
            data={data}
            width={700}
            height={700}
            innerRadius={250}
            outerRadius={350}
          />
          
        </div>
        <div style={divStyle}>
        <AnimatedPieHooks
            data={data}
            width={460}
            height={460}
            innerRadius={130}
            outerRadius={230}
          />
          </div>
      </div>
    );
  }

  export default App;