/**
 * @description Responsive Layout
 * @author Luo Wang
 */
import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter/inded";
import styles from "./index.module.less";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <NavHeader />
      <Content className={styles.content}>
        <div>
          <Outlet />
        </div>
      </Content>
      <NavFooter />
    </Layout>
  );
};

export default App;
