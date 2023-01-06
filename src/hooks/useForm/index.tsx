import React, { useState } from "react";

export function useForm(initialValues: any) {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleInputChange,
  };
}

export function Form(props: any) {
  return <form autoComplete="on">{props.children}</form>;
}
