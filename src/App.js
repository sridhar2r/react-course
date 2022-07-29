import Todo from "./components/Todo";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddTodoModal from "./components/AddTodoModal";
import Backdrop from './components/Backdrop';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  /*const [textOne, setTextOne] = useState("Learn React");
  const [textTwo, setTextTwo] = useState("Master React");
  const [textThree, setTextThree] = useState("Explore the full React course");*/
  const [isAddToModal, setIsAddToModal] = useState(false);
  const [newElt, setNewElt] = useState(["Learn React", "Master React", "Explore the full React course"]);
  function deleteTodoHandler(textVal) {
   /* if (textVal === textOne) {
      setTextOne(null);
    } else if (textVal === textTwo) {
      setTextTwo(null);
    } else if (textVal === textThree) {
      setTextThree(null);
    } else  {
     
    }*/
    const newArr = [];
    let count = 0;
    for (let i = 0; i < newElt.length; i++) {
      if(textVal !== newElt[i]) {
        newArr[count++] = newElt[i];
      }
    }
    setNewElt(newArr);
  }

  function deleteAllTodosHandler() {
    setNewElt([]);
  }

  function addTodoModalHandler() {
    setIsAddToModal(true);
  }

  function closeModalHandler() {
    setIsAddToModal(false);
  }

  function addNewTodo(todoNewName) {
    setNewElt((oldArray) => [...oldArray, todoNewName]);
    closeModalHandler();
  }

  return (
    <div>
      <div className="flex-b">
        <h1>My Todos</h1>
        <div className="add-icon" onClick={addTodoModalHandler}>
          <AddIcon fontSize="large" />
        </div>
        <div className="del-icon" onClick={deleteAllTodosHandler}>
          <DeleteIcon fontSize="large" />
        </div>
      </div>
      {newElt.map((elt, count) => ( elt && <Todo key={count} text={elt} onDeleteConfirm={deleteTodoHandler} />))}
     
      {isAddToModal && <AddTodoModal addTodo={addNewTodo} />}
      {isAddToModal && <Backdrop onClick={closeModalHandler}/>}
      
    </div>
  );
}

export default App;
