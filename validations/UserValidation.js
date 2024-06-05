import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required().maxlength(30),
  email: yup.string().email().required(),
  password: yup.string().required().min(4).max(15),
});
