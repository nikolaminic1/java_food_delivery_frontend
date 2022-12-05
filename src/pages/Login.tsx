import React, { FC, ReactElement, useEffect, useState } from "react";
import { MainFormLoginDiv, MainLoginDiv } from "./style/LoginStyle";
import { Button, Checkbox, Form, Input } from "antd";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  getUserAction,
  loginAction,
} from "../app/store/actions/user/userActions";
import { redirect, useNavigate } from "react-router-dom";

interface LoginProps {}

type LayoutType = Parameters<typeof Form>[0]["layout"];

const Login: FC<LoginProps> = ({}): ReactElement => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state: RootState) => {
    return state.user.isAuthenticated;
  });

  const jwtLoadingStatus = useAppSelector((state: RootState) => {
    return state.user.status;
  });
  const userLoadingStatus = useAppSelector((state: RootState) => {
    return state.jwt.status;
  });
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");

  let navigate = useNavigate();

  console.log(jwtLoadingStatus);

  useEffect(() => {
    // check if access is ok

    // if access is exipred then call refresh

    // if refresh is expired then process to login

    // if refresh is ok fetch user and set isAuthenticated to true

    if (isAuthenticated) {
      // return navigate("/");
    }
  }, []);

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 8 },
          wrapperCol: { span: 18 },
        }
      : null;

  const onFinish = (values: any) => {
    let username = values.username;
    let password = values.password;
    let remember = values.remember;
    const data = {
      password: password,
      username: username,
      remember: remember,
    };
    dispatch(loginAction(data));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <MainLoginDiv>
      {/* {loadingStatus == } */}
      <MainFormLoginDiv>
        <div>
          <h3>Login to your account</h3>
        </div>
        <Form
          {...formItemLayout}
          layout={formLayout}
          initialValues={{ layout: formLayout }}
          name="basic"
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
            wrapperCol={{ offset: 0, span: 24 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </MainFormLoginDiv>
    </MainLoginDiv>
  );
};

export default Login;
