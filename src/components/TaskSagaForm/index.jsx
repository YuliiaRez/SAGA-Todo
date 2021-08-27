import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { createTaskAction } from "../../actions";
import TODO_SCHEMA from "../../utils/validationShema";

function TaskSagaForm(props) {
  const { createTask } = props;

  const initialTaskValues = {
    body: "",
    isDone: false,
  };
  const submitHandler = (values, formikBag) => {
    createTask(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialTaskValues}
      onSubmit={submitHandler}
      validationSchema={TODO_SCHEMA}
    >
      {(formikProps) => {
        return (
          <Form>
            <Field name="body" />
            <button type="submit">Add Task</button>
            <br />
            <ErrorMessage name="body" component="span" />
          </Form>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createTask: (task) => {
    dispatch(createTaskAction(task));
  },
});

export default connect(null, mapDispatchToProps)(TaskSagaForm);
