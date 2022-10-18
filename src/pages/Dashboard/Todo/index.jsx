import React from "react";

function Todo({ todo, onCheckedTodo, onDeleteTodo }) {
  console.log("here");
  return (
    <div className={`todo ${todo?.isChecked ? "checked" : ""}`}>
      <div className="group-checked">
        <input
          type="checkbox"
          checked={todo?.isChecked}
          onChange={() => {
            onCheckedTodo(!todo?.isChecked);
          }}
        />
        <span className="ml-10">{todo?.name}</span>
      </div>
      <i className="bi-x item-remove" onClick={onDeleteTodo}></i>
    </div>
  );
}

export default Todo;
