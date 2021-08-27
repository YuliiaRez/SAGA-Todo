import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../actions";
import s from "../../pages/TaskSagaPage/TodoPage.module.scss";

function TasksSagaList(props) {
  const { tasks, isFetching, error, getTasks, deleteTask } = props;

  // useEffect(() => {
  //   getTasks();
  // }, []);

  const mapTask = ({ id, body, isDone }) => {
    // const changeDone = () => {
    //   updateUserAction({ id: id, isDone: !isDone });
    // };

    const deleteHandler = () => {
      deleteTask(id);
    };

    return (
      <li key={id}>
        body: {body}
        <input
          className={s.body}
          type="checkbox"
          checked={isDone} /*onChange={changeDone}*/
        />
        <button onClick={deleteHandler}>Delete</button>
      </li>
    );
  };

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>ERROR</div>}
      <ul className={s.tasksList}>{tasks.map(mapTask)}</ul>
    </>
  );
}

const mapStateToProps = (state) => state.task;

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(actionCreators.getTasksAction()),
  deleteTask: (id) => dispatch(actionCreators.deleteTaskAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksSagaList);
