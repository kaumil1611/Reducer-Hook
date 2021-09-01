import React, { useReducer } from "react";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val };
  }
  return { value: "" };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val };
  }
  return { value: "" };
};

const Login = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
  });

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(emailState.value, passwordState.value);
    // props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <h1>{`this is email : ${emailState.value}`}</h1>
      <h4>{`this is email : ${passwordState.value}`}</h4>
    </div>
  );
};

export default Login;
