import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
function Todo(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function deleteHandler() {
/*    console.log('Clicked!');
    console.log(props.text);*/
    setIsModalOpen(true);
  }

  function closeModalHandler() {
    setIsModalOpen(false);
  }

  function deleteConfirmHandler() {
    props.onDeleteConfirm(props.text);
    closeModalHandler();
  }

  return (
    <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
           <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {isModalOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={deleteConfirmHandler}/>
        )}
        {isModalOpen && <Backdrop onClick={closeModalHandler}/>}
    </div>
  );
}

export default Todo;
