import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import TaskList from "./Components/TaskList";
import TaskDetail from "./Components/TaskDetail";
import TaskForm from "./Components/TaskForm";
import NotFound from "./Components/NotFound";

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/tasks" component={TaskList} />
      <Route exact path="/tasks/:id" component={TaskDetail} />
      <Route exact path="/taskform" component={TaskForm} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default routes;
