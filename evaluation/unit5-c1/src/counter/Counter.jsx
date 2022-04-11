import React from "react"

export default function Counter() {
  const [counter,setCounter ] = React.useState(5)
    //destructuring
    //React.useState => [value, setValue]
 const handleIncrement = value => {
    // counter= counter + value
    setCounter(counter+ value)

    // console.log(counter);
    
 } 
//  console.log( "updated", counter);
   
  return (
    <>
      <h1> counter </h1> 
      <h2> {counter} </h2>
      <button onClick= {() => handleIncrement(1) } > add </button>
      <button onClick= {() => handleIncrement(-1) }> reduce </button>
   
    </>
  );
}
