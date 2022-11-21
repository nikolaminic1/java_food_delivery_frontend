import React, { FC, ReactElement } from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import { LayoutDiv } from "./styleLayout";

interface CLayoutProps {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

const { Header, Content, Sider } = Layout;

const CLayout: FC<CLayoutProps> = ({ title, children }): ReactElement => {
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
