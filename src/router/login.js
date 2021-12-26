import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Login(props) {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const login = () => {
    props.setLoggedInUsername(username);
  };

  return (
    <div>
      <TextField id="standard-basic" label="Standard" onChange={handleChange} />
      <Button onClick={login}>Login</Button>
    </div>
  );
}
