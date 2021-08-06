import React, { useState } from "react";
import "rsuite/dist/styles/rsuite-dark.css";
import { useDispatch } from "react-redux";

import {
  Button,
  Container,
  Header,
  Navbar,
  Content,
  FlexboxGrid,
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Divider,
  Tooltip,
} from "rsuite";
import "./App.css";
import { addTodo } from "./features/todos/todosSlice";
import Todos from "./features/todos/Todos";
import Posts from "./features/posts/Posts";

const App = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const [emptyAlert, setEmptyAlert] = useState(false);

  const handleTodoChange = (text) => {
    setEmptyAlert(false);
    setTodo(text);
  };

  const handleCreateClick = (todo) => {
    todo
      ? dispatch(addTodo({ text: todo, id: Date.now().toString() }))
      : setEmptyAlert(true);
    setTodo("");
  };

  return (
    <div className="main">
      <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Header>
              <p className="navbar-brand">Redux React TODO</p>
            </Navbar.Header>
          </Navbar>
        </Header>
        <Content>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12}>
              <Panel header={<h3>Add ToDo</h3>} bordered>
                <Form fluid>
                  <FormGroup>
                    <ControlLabel>What you want to do?</ControlLabel>
                    <FormControl
                      name="task"
                      value={todo}
                      onChange={handleTodoChange}
                    />
                    <Tooltip visible={emptyAlert}>
                      The todo cannot be empty
                    </Tooltip>
                  </FormGroup>
                  <FormGroup>
                    <ButtonToolbar>
                      <Button
                        appearance="primary"
                        onClick={() => handleCreateClick(todo)}
                      >
                        Create
                      </Button>
                    </ButtonToolbar>
                  </FormGroup>
                </Form>
              </Panel>
              <Divider />
              <Todos />
              <Posts />
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
      </Container>
    </div>
  );
};

export default App;
