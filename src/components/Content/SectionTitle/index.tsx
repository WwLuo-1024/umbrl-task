/**
 * @description Section Title Component
 * @author Luo Wang
 */
import React, { FC } from "react";
import { Row, Col, Typography } from "antd";
import styles from "./index.module.less";
import { SectionTilteTypes } from "@/types";

const { Title, Paragraph } = Typography;
type PropsType = {
  data: SectionTilteTypes;
};

const SectionTilte: FC<PropsType> = (props: PropsType) => {
  const { title, subTitle } = props.data;
  return (
    <div className={styles.sectionTilte}>
      <Row justify="center">
        <Col xs={22} sm={20} md={16} lg={12}>
          <Title style={{ textAlign: "center" }}>{title}</Title>
          {subTitle?.map((item, index) => {
            return (
              <Paragraph
                key={index}
                style={{
                  color: "#161C2D",
                  fontWeight: "400",
                  textAlign: "center",
                  marginBottom: index !== subTitle.length - 1 ? 0 : undefined,
                }}
              >
                {item}
              </Paragraph>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default SectionTilte;
