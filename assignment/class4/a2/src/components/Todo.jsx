import { useState } from "react"
import { TodoInput } from "./TodoInput"
import { TodoItem } from "./TodoItem"
import {nanoid} from "nanoid";

function Todo() {
//   const [todosList, setTodosList ] = useState(["Learn React", "Learn Redux"])
const [todosList, setTodosList ] = useState([])

const getData = (todo) => {
    // console.log("Received", todo);
    const payload = {
        title: todo,
        status: false,
        id: nanoid(5)
    }

    setTodosList([...todosList, payload])
   

//     let numberStore = [0, 1, 2];
// let newNumber = 12;
// numberStore = [...numberStore, newNumber];
// console.log(numberStore)  //  [0, 1, 2, 12]

}


//  const handleStatus = (id) => {
//      console.log("id:", id);
    // find this id from todosList
    // toggle it's status
    // get new Array, set it again
  


//      setTodosList(

//     //    ...todosList.map( (e) => (e.id === id? {...e, status: !e.status } : e ) )  

// line 39  ki jagah --- line 44(without spread in starting)


//     todosList.map( (e) => (e.id === id? {...e, status: !e.status } : e ) ) 

// );

//  } 




// line 29 to 48 ki jagah --- line 57 to 71



 const handleStatus = (id) => {
     console.log("id:", id);

     const newarr= todosList.map( (e)  => {
       if(e.id===id) {
           return {
              ...e,
              status: !e.status, 
           };
       }
       return e;

     });
     setTodosList(newarr);
 }   


    return  (
       <div>
          <TodoInput getData= {getData} />
            {/* { Todos list} */}
            {todosList.map( (e) => ( 

            //    <div> {e} </div>
            <TodoItem  handleStatus= {handleStatus} todo={e} > </TodoItem>

               )  ) }

            

       </div>


    )
 
}

export {Todo}