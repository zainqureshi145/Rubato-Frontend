import React, { useState } from "react";
import axios from "axios";
import { TextInput } from "../layout/FieldInput";
import { setJwtHeader } from "../utils/Utils";
import { SubmitButton } from "../layout/Buttons";

const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://rubato-no.herokuapp.com/api/register/signIn", {
        username: username,
        password: password
      })
      .then(response => {
        setJwtHeader(response.data.token);
        history.push("/");
      })
      .catch(err => console.log(err, "login error"));
  };

  return (
    <div id="Login" className="input-field center-align">
      <h6>
        <b>If you are registered, login here.</b>
      </h6>
      <form onSubmit={handleSubmit}>
        <div className="container center-align">
          <TextInput
            value={username}
            onChange={event => setUsername(event.target.value)}
            label="Username"
            name="username"
          />
          <TextInput
            value={password}
            onChange={event => setPassword(event.target.value)}
            label="Password"
            name="password"
          />
          <SubmitButton name="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
