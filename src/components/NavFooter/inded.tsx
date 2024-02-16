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

              <a href="/about-us" className={styles.footerLink}>
                About us
              </a>
              <a href="/contact-us" className={styles.footerLink}>
                Contact us
              </a>
              <a href="/careers" className={styles.footerLink}>
                Careers
              </a>
              <a href="/press" className={styles.footerLink}>
                Press
              </a>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={4}>
            <div className={styles.footerColumn}>
              <h4>Product</h4>
              <a href="/features" className={styles.footerLink}>
                Features
              </a>
              <a href="/pricing" className={styles.footerLink}>
                Pricing
              </a>
              <a href="/news" className={styles.footerLink}>
                News
              </a>
              <a href="/helpDesk" className={styles.footerLink}>
                Help desk
              </a>
              <a href="/support" className={styles.footerLink}>
                Support
              </a>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={4}>
            <div className={styles.footerColumn}>
              <h4>Services</h4>
              <a href="/digitalMarketing" className={styles.footerLink}>
                Digital Marketing
              </a>
              <a href="/contentWriting" className={styles.footerLink}>
                Content Writing
              </a>
              <a href="/seoForBusiness" className={styles.footerLink}>
                SEO for Business
              </a>
              <a href="/uiDesign" className={styles.footerLink}>
                UI Design
              </a>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={4}>
            <div className={styles.footerColumn}>
              <h4>Legal</h4>
              <a href="/privacyPolicy" className={styles.footerLink}>
                Privacy Policy
              </a>
              <a href="/termsAndConditions" className={styles.footerLink}>
                Terms & Conditions
              </a>
              <a href="/returnPolicy" className={styles.footerLink}>
                Return Policy
              </a>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={4}>
            <div className={styles.footerColumn}>
              <h4>Contact us</h4>
              <a href="/support@brainwave.io" className={styles.footerLink}>
                support@brainwave.io
              </a>
              <a href="/phone" className={styles.footerLink}>
                +133-394-3439-1435
              </a>
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
