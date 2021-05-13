import React, { useState } from 'react';
import './Circle.css';
import ProgressBar from './Progress.js';
import {useSelector} from 'react-redux';

const txt = ["You are Awesome", "You are healthy", "You are unfit", "Hazardeous"]
const Circle = () => {
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState('');
  const colorArray = ['#8B008B'];

  const randomColor = () => {
    if(k>=0.6){
      return colorArray[0];
    }
    else if (k>=0.5 && k<0.6){
      return colorArray[0];
    }
    else{
      return colorArray[0];
    }
  }

  let k=useSelector(state => state.Row);

  const onChange = e => {
    let progress=e.target.value;
    if (e.target.value) {
      if (e.target.value > 100) {
        progress = 100;
      }
      if (e.target.value < 0) {
          progress = 0;
      }
      setProgress(k*100);
      const randomProgressColor = randomColor();
      setColor(randomProgressColor);
    } else {
      setProgress(0);
    }
  }

  return (
    <div className="Circle">
      <div className="app-header">
        <ProgressBar 
          progress={k*100}
          size={250}
          strokeWidth={15}
          circleOneStroke='#d9edfe'
          circleTwoStroke={color}
        />
        <p>
          <button className="btnburn"
          style={
            {
              fontSize:"10px"
            }
          }
            type="number"
            name="percent"
            value={k*100}
            onClick={onChange}
            >FIND YOUR BURN RATE</button>
        </p>
        <div className="txt">
          {txt[0]}
        </div>
      </div>
    </div>
  );
}

export default Circle;