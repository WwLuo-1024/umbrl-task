/**
 * @description App.tsx
 * @author Luo Wang
 */
import React from "react";
import { ConfigProvider, App as AntdApp } from "antd";
import "./App.less";
import { RouterProvider } from "react-router-dom";
import router from "./router";

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
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
