import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, selectTodos } from "./todosSlice";
import { List, Button, FlexboxGrid } from "rsuite";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const mappedTodos = todos.map(({ text, id }) => (
    <List.Item key={id}>
      <FlexboxGrid justify="space-between">
        {text}
        <Button onClick={() => handleDelete(id)}>Delete</Button>
      </FlexboxGrid>
    </List.Item>
  ));

  return <List bordered>{mappedTodos}</List>;
};

export default Todos;
