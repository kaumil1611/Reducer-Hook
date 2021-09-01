import React, { useReducer, useState } from "react";
const initialState = {
  email_data: "Email",
  password_data: "Password",
};

const reducer = (cState, action) => {
  //   console.log(action.payload.emailVal);
  console.log(cState, "this is state");
  switch (action.type) {
    case "Email":
      return { email: action.val };
    case "Password":
      return { password: action.val1 };
    default:
      console.log("this is call");
      return { email: "", password: "" };
  }

  //   if (action.type === "Email") {
  //     return { email: action.val };
  //   }
  //   if (action.type === "Password") {
  //     return { password: action.val1 };
  //   }
};
const Form2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [dataVal, setDataVal] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (event) => {
    setDataVal({
      ...dataVal,
      [event.target.name]: event.target.value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: initialState.email_data, email: dataVal.email });
  };
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="email" name="email" onChange={changeHandler} />
        <input
          type="password"
          name="password"
         onChange = { changeHandler }
        />
      </form>
      <button type="submit">submit</button>
    </div>
  );
};

export default Form2;
