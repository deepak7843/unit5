
import './App.css';
// import counter from "./counter/Counter"
import {useState} from "react";


function App() {

  const [add, setadd] = useState({
    sco:76,
    wick:2,
    ball:50,
  })
  
  const handlesco = (value)=>{
    setadd({...add,sco:add.sco+value})
  }

  const handlewick = (value)=>{
    setadd({...add,wick:add.wick+value});
  }
  const handleball = (value)=>{
    setadd({...add,ball:add.ball+value});
  }

  return (
    <div className="App">
      <h3 className='india' >India:</h3>
      <div className="banner">


        <div>
          Score:{" "}
          <h1 className="scoreCount">
            { 
              // show "score" here
              add.sco
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              add.wick
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
         <span> Add Score  </span>
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1"  onClick={()=>{handlesco(1)}} >Add 1</button>
        <button className="addScore4" onClick={()=>{handlesco(4)}}>Add 4</button>
        <button className="addScore6" onClick={()=>{handlesco(6)}} >Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{handlewick(1)}} >Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{handleball(1)}} >Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;






























// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
