/**
 * @description Footer Component
 * @author Luo Wang
 */

import React, { FC } from "react";
import { Layout, Row, Col } from "antd";
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import styles from "./index.module.less";

//Antd Layout Component
const { Footer } = Layout;

const NavFooter: FC = () => {
  return (
    <Footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <Row className={styles.antRow} gutter={[0, 16]}>
          <Col xs={24} sm={12} md={8} lg={4}>
            <div className={styles.footerColumn}>
              <h4>Company</h4>
              <p>About us</p>
              <p>Contact us</p>
              <p>Careers</p>
              <p>Press</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={4}>
            <div className={styles.footerColumn}>
              <h4>Product</h4>
              <p>Features</p>
              <p>Pricing</p>
              <p>News</p>
              <p>Help desk</p>
              <p>Support</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={4}>
            <div className={styles.footerColumn}>
              <h4>Services</h4>
              <p>Digital Marketing</p>
              <p>Content Writing</p>
              <p>SEO for Business</p>
              <p>UI Design</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={4}>
            <div className={styles.footerColumn}>
              <h4>Legal</h4>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Return Policy</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={4}>
            <div className={styles.footerColumn}>
              <h4>Contact us</h4>
              <p>support@brainwave.io</p>
              <p>+133-394-3439-1435</p>
            </div>
          </Col>
        </Row>
        <Row className={styles.footerDivider}>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{ color: "#fff", marginBottom: "12px" }}
          >
            <p>
              © 2024 Copyright, All Right Reserved, Made by Sejju_ui_ux with ❤
            </p>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} className={styles.socialIcons}>
            <TwitterOutlined style={{ marginRight: 10 }} />
            <FacebookOutlined style={{ marginRight: 10 }} />
            <InstagramOutlined style={{ marginRight: 10 }} />
            <LinkedinOutlined />
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default NavFooter;
