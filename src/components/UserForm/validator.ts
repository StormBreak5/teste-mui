export const emailValidator = (email: string) => {
  if (!email) {
    return "E-mail é obrigatório";
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return "Formato incorreto de e-mail";
  }
  return "";
};

export const passwordValidator = (password: string) => {};

export const confirmPasswordValidator = (
  confirmPassword: string,
  form: any
) => {};
