import React, { FC, ReactElement, useEffect } from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import { LayoutDiv } from "./styleLayout";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { useDispatch } from "react-redux";
import {
  getUserAction,
  loginAction,
} from "../app/store/actions/user/userActions";

interface CLayoutProps {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

const { Header, Content, Sider } = Layout;

const CLayout: FC<CLayoutProps> = ({ title, children }): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("access") !== "undefined") {
      console.log(localStorage.getItem("access"));
      dispatch(getUserAction());
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Layout>
        <Content>
          <div className="main-content-div">{children}</div>
        </Content>
      </Layout>
    </div>
  );
};

export default CLayout;
