/**
 * @description Section Title Component
 * @author Luo Wang
 */
import React, { FC } from "react";
import { Row, Col } from "antd";
import styles from "./index.module.less";
import { SectionTilteTypes } from "@/types";

type PropsType = {
  data: SectionTilteTypes;
};

const SectionTilte: FC<PropsType> = (props: PropsType) => {
  const { title, subTitle } = props.data;
  return (
    <div className={styles.sectionTilte}>
      <Row justify="center">
        <Col xs={22} sm={20} md={16} lg={12}>
          <p className={styles.title}>{title}</p>
          {subTitle?.map((item, index) => {
            return (
              <p
                key={index}
                className={styles.paragraph}
                style={{
                  marginBottom: index !== subTitle.length - 1 ? 0 : undefined,
                }}
              >
                {item}
              </p>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default SectionTilte;
