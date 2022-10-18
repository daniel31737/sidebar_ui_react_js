import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";

import Ticket from "./Ticket";

function Dashboard(props) {
  const [tickets, setTicketData] = useState([]);
  const [ticketName, setTicketName] = useState("");

  const onCreateTicket = () => {
    if (!ticketName) {
      return;
    }

    setTicketData([
      ...tickets,
      {
        id: uuidV4(),
        name: ticketName,
        todos: [],
      },
    ]);
    setTicketName("");
  };

  const onCreateTodo = (ticketId, todoTitle) => {
    let ticketIndex = tickets.findIndex(ticket => ticket?.id === ticketId);
    let newTicket = [...tickets];
    newTicket[ticketIndex].todos.push({
      id: uuidV4(),
      name: todoTitle,
      isChecked: false,
    });

    setTicketData(newTicket);
  };

  const onCheckedTodo = (ticketId, todoId, checked) => {
    let newTicket = [...tickets];

    let ticketIndex = newTicket.findIndex(ticket => ticket?.id === ticketId);
    let todoIndex = (newTicket[ticketIndex].todos || []).findIndex(
      todo => todo?.id === todoId
    );

    newTicket[ticketIndex].todos[todoIndex] = {
      ...newTicket[ticketIndex].todos[todoIndex],
      isChecked: checked,
    };

    setTicketData(newTicket);
  };

  const onDeleteTodo = (ticketId, todoId) => {
    let newTicket = [...tickets];

    let ticketIndex = newTicket.findIndex(ticket => ticket?.id === ticketId);
    let todoIndex = (newTicket[ticketIndex].todos || []).findIndex(
      todo => todo?.id === todoId
    );

    newTicket[ticketIndex].todos.splice(todoIndex, 1);

    setTicketData(newTicket);
  };

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1>DASHBOARD</h1>
        <div className="group-create">
          <input
            type="text"
            className="input-primary"
            placeholder="New list"
            value={ticketName}
            onChange={e => setTicketName(e.target.value)}
          />
          <button
            type="button"
            className="ml-10 btn-primary"
            onClick={onCreateTicket}
          >
            Create
          </button>
        </div>
      </div>
      <div className="dashboard__content">
        {tickets.map(ticket => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            onCreateTodo={onCreateTodo}
            onCheckedTodo={onCheckedTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
