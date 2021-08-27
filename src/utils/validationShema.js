import * as yup from "yup";

const TODO_SCHEMA = yup.object({
  body: yup
    .string()
    // .matches(
    //   /^(?=.*[а-яА-ЯёЁa-zA-Z0-9].*)$/,
    //   "The task must contain less than 100symbols."
    // )
    // .min(1)
    .max(100)
    .required(),
});

export default TODO_SCHEMA;
