import React from 'react';
import okLogo from '../../assets/ok.png';
import deleteLogo from '../../assets/delete.png';

// toDoList den gonderilen propsu yakaladik ve asagida,reducerdaki olustrdgmz dizideki yaziyi yaz diyoruz
const TodoItem = ({gorev}) => {


  return (
    <div
      style={{ backgroundColor: "orange", borderRadius: "5px" }}
      className="todo-list"
    >
      <h2 className="todoText">
      {gorev.yazi}
       
      </h2>
      <div>
        <span>
          <img src={okLogo} className="ok-logo" alt="ok logo" />
        </span>
        <span>
          <img src={deleteLogo} className="delete-logo" alt="delete logo" />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
