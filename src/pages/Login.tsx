import React, { FC, ReactElement } from "react";
import { MainFormLoginDiv, MainLoginDiv } from "./style/LoginStyle";
import { Button, Checkbox, Form, Input } from "antd";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { login } from "../app/store/actions/user/userActions";

interface LoginProps {}

const Login: FC<LoginProps> = ({}): ReactElement => {
  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    let username = values.username;
    let password = values.password;
    let remember = values.remember;
    dispatch(login(username, password, remember));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <MainLoginDiv>
      <MainFormLoginDiv>
        <div>
          <h3>Login to your account</h3>
        </div>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </MainFormLoginDiv>
    </MainLoginDiv>
  );
};

// const actions: any = Object.assign({}, auth);

// function mapStateToProps(state: RootState) {
//   return {
//     calculatorState: state.calculatorReducer,
//   };
// }

// function mapDispatchToProps(dispatch: Dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;
