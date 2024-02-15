/**
 * @description App.tsx
 * @author Luo Wang
 */
import React from "react";
import { ConfigProvider, App as AntdApp } from "antd";
import "./App.less";
import LandingPage from "./views/LandingPage/LandingPage";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#473BF0",
        },
      }}
    >
      <AntdApp>
        <LandingPage />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
