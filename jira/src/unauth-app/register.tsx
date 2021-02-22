import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";

function RegisterScreen() {
  const { register, user } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
    register({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">User Name</label>
        <input type="text" id="username">
          User Name
        </input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password">
          User Name
        </input>
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterScreen;
