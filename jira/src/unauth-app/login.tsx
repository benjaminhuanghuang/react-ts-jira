import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
//
import { Form, Input, Button } from "antd";

function LoginScreen() {
  const { login, user } = useAuth();

  const handleSubmit = (values:{username:string, password:string}) => {
    // event.preventDefault();
    // const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    // const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
    login(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      {user ? <div>Login success, user name: {user?.name}</div> : null}
      <Form.Item name="username" rules={[{ required: true, message: "please input username" }]}>
        <Input placeholder="user name" type="text" id="username"></Input>
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: "please input password" }]}>
        <Input placeholder="password" type="password" id="password"></Input>
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit' type="primary">Login</Button>
      </Form.Item>
    </Form>
  );
}

export default LoginScreen;
