import * as yup from "yup";

export const loginValidator = yup.object().shape({
  email: yup.string().label("Email").email().required(),
  password: yup.string().label("Password").min(4).required(),
});
