import React, { useReducer, useState, useEffect } from "react";
const initialState = {
  email: "",
  password: "",
};

const reducer = (cState, action) => {
  console.log(cState, "this is current state");
  switch (action.type) {
    case "Email":
      return { ...cState, [action.email]: action.val };
    case "Password":
      return { ...cState, [action.password]: action.val1 };

    default:
      console.log("this is call");
      return { email: "", password: "" };
  }
};

const Form = () => {
  let fData = "";
  const [state, dispatch] = useReducer(reducer, initialState);
  const [myData, setMyData] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const finalData = {
      email: state.email,
      password: state.password,
    };
    setMyData((prevData) => [...prevData, finalData]);

    document.myForm.reset();
    dispatch([]);
  };

  //   useEffect(() => {
  //     console.log(myData);
  //     fData = myData.map((data) => {
  //       return (
  //         <React.Fragment>
  //           <li>{data.email}</li>
  //           <li>{data.password}</li>{" "}
  //         </React.Fragment>
  //       );
  //     });
  //   }, [myData]);
  return (
    <div>
      <form name="myForm" onSubmit={submitHandler}>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            dispatch({
              type: "Email",
              email: e.target.name,
              val: e.target.value,
            });
          }}
          required
        />
        <input
          type="password"
          name="password"
          onChange={(e) => {
            dispatch({
              type: "Password",
              password: e.target.name,
              val1: e.target.value,
            });
          }}
          required
        />
        <button type="submit">submit</button>
      </form>

      <ul>{console.log(fData, "this is final data")}</ul>
      {myData.length > 0 ? (
        <ul>
          {myData.map((data) => {
            return (
              <React.Fragment>
                <li>{data.email}</li>
                <li>{data.password}</li>{" "}
              </React.Fragment>
            );
          })}
        </ul>
      ) : (
        ""
      )}

      {/* <h5>{`Your password is: ${myData.password}`}</h5> */}
    </div>
  );
};

export default Form;
