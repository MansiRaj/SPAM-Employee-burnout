import React, { useState ,useEffect} from 'react';
import g1 from '../Assests/g1.jpeg';
import g2 from '../Assests/g2.jpeg';
import g3 from '../Assests/g3.jpeg';
import { Button } from 'reactstrap';
import './Graph.css'


const Graph = (props) => {
  const img =[g1,g2,g3];
  const [a,sa]=useState(-1);
  const [c,sc]=useState(0);
  const [d,sd]=useState(0);
  const [e,se]=useState(0);
  useEffect(() => {
      sa(0)
    
    },[c]);
    useEffect(() => {
      sa(1)
    
    },[d]);
    useEffect(() => {
      sa(2)
    
    },[e]);
  return (
    <div className="graph">
        <img src={img[a]} style={{ height: "400px", width: "100" }} alt="Graph "/>
        <div className="graphbutton">
        <Button className="btn" onClick={()=>{sc(c+1)}}>graph 1</Button>{' '}
        <Button className="btn" onClick={()=>{sd(d+1)}}>graph 2</Button>{' '}
        <Button className="btn" onClick={()=>{se(e+1)}}>graph 3</Button>{' '}
        </div>
    </div>

    
    
  );
};

export default Graph;