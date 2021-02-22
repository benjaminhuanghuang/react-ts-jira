import React, { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL;  

function LoginScreen() {

  const login = (param:{username:string, password:string})=>{
    fetch(`${apiUrl}/login`, {
      method:'POST',
      headers:{
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(param)
    }).then(
      async(response: Response)=>{
        if(response.ok){
  
        }
      }
    );
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
    login({username, password});
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
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginScreen;
