/**
 * @description Feature Section Component
 * @author Luo Wang
 */
import React, { FC } from "react";
import { Row, Col, Typography } from "antd";
import * as AllIcons from "@ant-design/icons";
import styles from "./index.module.less"; // Make sure to create this LESS file
import { FeaturesType, IconProps } from "@/types";

const { Title, Paragraph } = Typography;

type PropsType = {
  data: FeaturesType[];
};

/**
 * Dynamic render the Icon Component through the icon key name
 * @param name
 * @returns
 */
const Icon: React.FC<IconProps> = ({ name }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = AllIcons[name] as any;
  if (!IconComponent) {
    console.error(`Icon ${name} does not exist.`);
    return null;
  }
  return React.createElement(IconComponent);
};

const FeaturesSection: FC<PropsType> = (props: PropsType) => {
  const featureDataList = props.data;

  return (
    <>
      <Row gutter={[16, 16]} className={styles.featuresRow}>
        {featureDataList.map((feature, index) => (
          <Col key={index} xs={24} sm={12} md={8} className={styles.featureCol}>
            <div className={styles.featureCard}>
              <div className={styles.cardLeft}>
                <div className={styles.iconWrapper}>
                  <Icon name={feature.icon} />
                </div>
              </div>
              <div className={styles.cardRight}>
                <Title level={4} className={styles.featureTitle}>
                  {feature.title}
                </Title>
                <Paragraph className={styles.featureDescription}>
                  {feature.description}
                </Paragraph>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FeaturesSection;
