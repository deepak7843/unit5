import { useState } from "react";

import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {

const [state, setState] = useState("show");

const handleChange = () => {
 if(state=== "add"){
   setState("show")
 } else if( state=== "show") {
   setState("add")
 }
 console.log(state);

}

  return (
    <div className="App">
      <button className="togglebtn" onClick={handleChange} >
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {state === "show" ? "Add Students": "Show Students"  }

      </button>
      {state === "show" ? <ShowStudents /> : <AddStudent/>  }
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}

      {/* console.log(56778); */}
    </div>
  );
}

export default App;
