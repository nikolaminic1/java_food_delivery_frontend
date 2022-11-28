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
import Sidebar from "./Sidebar";

interface CLayoutProps {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

const { Header, Content, Sider } = Layout;

const CLayout: FC<CLayoutProps> = ({ title, children }): ReactElement => {
  const dispatch = useAppDispatch();

  let w = window.innerWidth;

  // useEffect(() => {
  //   if (localStorage.getItem("access") !== "undefined") {
  //     console.log(localStorage.getItem("access"));
  //     dispatch(getUserAction());
  //   }
  // }, []);
  return (
    <div>
      {w > 760 ? <Navbar /> : <Sidebar />}
      <LayoutDiv>
        <Content>
          <div className="main-content-div">{children}</div>
        </Content>
      </LayoutDiv>
    </div>
  );
};

export default CLayout;
