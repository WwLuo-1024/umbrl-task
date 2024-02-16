/**
 * @description Header Component
 * @author Luo Wang
 */
import React, { FC, useState } from "react";
import styles from "./index.module.less";
import { Button, Dropdown, Grid } from "antd";
import { Header } from "antd/es/layout/layout";
import { MenuOutlined } from "@ant-design/icons";
import { MenuItemType } from "antd/es/menu/hooks/useItems";

//Header Right Items
const items: MenuItemType[] = [
  {
    key: "demos",
    label: (
      <a rel="demos" href="/demos">
        Demos
      </a>
    ),
  },
  {
    key: "pages",
    label: (
      <a rel="pages" href="/pages">
        Pages
      </a>
    ),
  },
  {
    key: "support",
    label: (
      <a rel="support" href="/support">
        Support
      </a>
    ),
  },
  {
    key: "contact",
    label: (
      <a rel="contact" href="/contact">
        Contact
      </a>
    ),
  },
  {
    key: "signIn",
    label: (
      <a rel="signIn" href="/signIn">
        Sign In
      </a>
    ),
  },
  {
    key: "signUp",
    label: (
      <a rel="signUp" href="/signUp">
        Sign Up
      </a>
    ),
  },
];

const NavHeader: FC = () => {
  //Antd Responsive Design
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  //state to control Dropdown
  const [visible, setVisible] = useState(false);

  return (
    <Header className={styles.naviHeader}>
      <div className={styles.left}>Brainwave.io</div>
      <div className={styles.right}>
        {screens.md ? (
          items.map((item, index) => (
            <Button
              style={{
                marginRight: index === items.length - 1 ? 0 : 20,
                fontWeight: "bold",
              }}
              key={item?.key}
              type={item?.key === "signUp" ? "primary" : "text"}
            >
              {item?.label}
            </Button>
          ))
        ) : (
          <Dropdown
            menu={{ items }}
            onOpenChange={(flag) => setVisible(flag)}
            open={visible}
          >
            <Button
              icon={<MenuOutlined />}
              onClick={() => setVisible(!visible)}
            />
          </Dropdown>
        )}
      </div>
    </Header>
  );
};

export default NavHeader;
