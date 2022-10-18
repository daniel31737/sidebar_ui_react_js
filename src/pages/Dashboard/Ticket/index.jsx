import React, { useState, useRef } from "react";

import Todo from "../Todo";

function Ticket({ ticket, ...props }) {
  const [showAddTodo, toggleAddTodo] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");

  const onCreateTodo = () => {
    if (!todoTitle) {
      return;
    }

    props?.onCreateTodo(ticket?.id, todoTitle);
    setTodoTitle("");
  };

  return (
    <div className="ticket">
      <div className="ticket__header">
        <span>{ticket?.name}</span>
        <i className="bi-plus" onClick={() => toggleAddTodo(!showAddTodo)}></i>
      </div>
      <div className="ticket__content">
        {showAddTodo && (
          <input
            type="text"
            className="input-primary"
            placeholder="New item"
            value={todoTitle}
            onChange={e => {
              setTodoTitle(e?.target?.value);
            }}
            onKeyDown={e => {
              console.log("here");
              if (e?.key === "Escape") {
                toggleAddTodo(false);
              }

              if (e?.key === "Enter") {
                onCreateTodo();
              }
            }}
          />
        )}
        {(ticket?.todos || []).map(todo => (
          <Todo
            key={todo?.id}
            todo={todo}
            onCheckedTodo={checked => {
              props?.onCheckedTodo(ticket?.id, todo?.id, checked);
            }}
            onDeleteTodo={() => {
              props?.onDeleteTodo(ticket?.id, todo?.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Ticket;
