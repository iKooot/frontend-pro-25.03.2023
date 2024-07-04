import { useEffect, useState } from "react";

export const useForm = ({ value, touched, error }) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!touched && error && value !== '');
  }, [value, error]);

  function onSubmitHandler(e) {
    e.preventDefault();

    console.log({ name: value });
  }

  return {
    onSubmitHandler,
    disabled,
  };
};

export const useInput = (regex, errorMassage = "Invalid value") => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState(false);

  function onChangeHandler(e) {
    setValue(e.target.value);
  }

  function onFocsHandler() {
    setTouched(true);
  }

  useEffect(() => {
    if (!regex.test(value) && value !== "") {
      setError(errorMassage);
    } else {
      setError(false);
    }
  }, [value]);

  return {
    value,
    error,
    touched,
    onChangeHandler,
    onFocsHandler,
  };
};
