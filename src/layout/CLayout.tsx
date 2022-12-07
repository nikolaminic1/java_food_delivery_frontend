import React, { FC, ReactElement, useEffect, useState } from "react";
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
import { windowSlice } from "../app/store/slice/window/windowSlice";

interface CLayoutProps {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

const { Header, Content, Sider } = Layout;

const CLayout: FC<CLayoutProps> = ({ title, children }): ReactElement => {
  const dispatch = useAppDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const width = useAppSelector((state: RootState) => {
    return state.windowReducer.width;
  });

  useEffect(() => {
    function handleResize() {
      dispatch(windowSlice.actions.setDimensions());
    }
    window.addEventListener("resize", handleResize);
  });

  // useEffect(() => {
  //   console.log(sidebarOpen);
  // }, [sidebarOpen]);

  useEffect(() => {
    if (localStorage.getItem("access") !== undefined) {
      console.log(localStorage.getItem("access"));
      dispatch(getUserAction());
    }
  }, []);

  return (
    <div>
      {/* {width > 760 ? (
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      ) : (
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      )} */}
      <LayoutDiv>
        <Content>
          <div className="main-content-div">{children}</div>
        </Content>
      </LayoutDiv>
    </div>
  );
};

export default CLayout;
