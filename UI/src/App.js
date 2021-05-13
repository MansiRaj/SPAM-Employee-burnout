import { Navbar, NavbarBrand } from 'reactstrap';
import Typical from 'react-typical';
import './App.css';
import Graph from './Components/Graph.js';
import Circle from './Components/Circle.js';
import Table from './Components/Table.js';

function App() {
  return (
    <div>
      <Navbar className="Navbar">
        <div className="container">
          {/* <NavbarBrand href="/">SPAM</NavbarBrand> */}
          <p className="quote"> SPAM &ensp; 
          <Typical loop={Infinity} wrapper="a" steps={[
            'has got you covered', 200,
            'is here for your rescue', 200,
            'cares for you', 200,
            'is looking after you', 200
          ]} />
          </p>
        </div>
      </Navbar>
      <div className="body">
        <h1>Hello User!</h1>
          <div className="dashboard">
          <Graph/>
          <Circle/>
            </div>
            </div>
        <div>
          <Table/>
        </div>
    </div>
  );
}


export default App;
