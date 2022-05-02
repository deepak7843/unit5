// import logo from './logo.svg';
// import {useState } from "react"
import "./App.css";

import {Todo} from "./components/Todo";


function App() {
  return (
    <div className="App"> 
     <Todo  />
    </div>
  );
}

export default App;







// ************just below is getting data from child to *child **********************************************************************************


// function App() {
//    const [message, setMessage] = useState("");

//   const getData = (data) => {
//      console.log("got Data from child:" , data);
//      setMessage(data)
//   }
 
//  return (
//    <div className="App">
//       <First dataFn= {getData} />

//       <Second  message= {message}  />
//    </div>
//  );
// }





// // function First({dataFn}) {

// //  const data = "Hello c1"  // data is in child
 
// //  dataFn(data)

// //   return <div> First Child </div>
// // }


// function First({dataFn}) {

//   const data = "Hello c1"  // data is in child
  
 
//    return (
//      <div>
//         First Child 

//         <button 

//           onClick={ () => {
          
//             dataFn(data)

//         } } > 

//          send data   </button>
//         </div>

//    ) 
//  }







// function Second({message}) {
//   console.log("got Data from sibling:" , message);
//  return <div> Second Child, {message} </div>
// }

// export default App;






// ************just below is getting data from child to parent **********************************************************************************




// function App() {
//    const getData = (data) => {
//       console.log("got Data from child:" , data);
//    }
  
//   return (
//     <div className="App">
//        <First dataFn= {getData} />

//        <Second/>
//     </div>
//   );
// }

// function First({dataFn}) {

//   const data = "Hello c1"  // data is in child
//   dataFn(data)
//    return <div> First Child </div>
// }

// function Second() {
//   return <div> Second Child </div>
// }

// export default App;






// **********************************************************************************************



// function App() {
//   const data = "Hello c1"  // data is in parent
//   // const x= "suno c1"
//   return (
//     <div className="App">
//        <First data= {data} />
//        {/* <First y= {x} /> */} // @29:48

//        <Second/>
//     </div>
//   );
// }

// function First({data}) {
//   // function First({y}) {

 
//   console.log("Received from parent" , data);

//    return <div> First Child </div>
// }

// function Second() {
//   return <div> Second Child </div>
// }

// export default App;





// **********************************************************************************************



// function App() {
//   return (
//     <div className="App">
//        <First/>
//        <Second/>
//     </div>
//   );
// }

// function First() {
//    const [x, setX] = useState(30);
//    return <div> First Child, {x} </div>
// }

// function Second() {
//   return <div> Second Child </div>
// }

// export default App;






// ****************ball over 8.2 ******************************************************************




// function App() {

//    const ballCount= 50;

//   return (
//     <div className="App">
    
//      Current Over: {`${Math.floor(ballCount/6)}. ${ballCount%6}`}
//     </div>
//   );
// }

// export default App;





// *********************************************************************************************************************************




// function App() {
//   return (
//     <div className="App">
//         < First data= {data} />
//         <Second/>
//     </div>
//   );
// }

// function First () {
//   console.log("received by parent" , data);
//   return <div> first child </div>
// }

// function Second () {
//   // console.log("received by parent" , data);
//   return <div> Second child </div>
// }

// export default App;


