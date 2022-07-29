function AddTodoModal(props) {
  function addHandler() {
    const todoName = document.getElementById("todo-name").value;
    if (todoName !== undefined && todoName !== "") {
      props.addTodo(todoName);
    }
  }

  return (
    <div className="modal">
      <div className="inp-di">
        <label htmlFor="todo-name">Enter Todo Name </label>
        <input id="todo-name" type="text" className="inp"></input>
      </div>
      <button className="btn btn-inp" onClick={addHandler}>
        Add
      </button>
    </div>
  );
}

export default AddTodoModal;
