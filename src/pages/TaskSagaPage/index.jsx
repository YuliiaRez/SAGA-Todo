import React from "react";
import TaskSagaForm from "../../components/TaskSagaForm";
import TasksSagaList from "../../components/TasksSagaList";

function TaskSagaPage() {
  return (
    <>
      <TaskSagaForm />
      <TasksSagaList />
    </>
  );
}

export default TaskSagaPage;
