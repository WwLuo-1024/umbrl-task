/**
 * @description Component of "Pricing and Plans" content
 * @author Luo Wang
 */
import React, { FC } from "react";
import { Row, Col, Card, Typography, Button, Switch } from "antd";
import styles from "./index.module.less";
import {
  ArrowRightOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { formatMoney } from "@/utils";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "@/store";
import { PricingDataType, loadData } from "@/store/pricingReducer";
import { pricingDataMonth, pricingDataYear } from "@/utils/constants";
const { Text } = Typography;

const PricingSection: FC = () => {
  // This state could be used to toggle between Monthly and Yearly pricing
  const [isMonthly, setIsMonthly] = React.useState(true);

  //Obtain data from redux store
  const pricingDataList = useSelector<StateType>(
    (state) => state.pricingDataList
  ) as PricingDataType[];

  //dispatch for state management in redux
  const dispatch = useDispatch();

  // console.info("price", pricingDataList);

  /**
   * toggle handler of pricing and plans
   */
  function handlePlanSetting() {
    setIsMonthly(!isMonthly);
    if (isMonthly) {
      dispatch(loadData(pricingDataYear));
    } else {
      dispatch(loadData(pricingDataMonth));
    }
  }

  return (
    <div className={styles.pricingContainer}>
      <Row justify="center" gutter={[16, 16]}>
        <Col span={24} style={{ textAlign: "center", alignItems: "center" }}>
          {/* Toggle Switch for Pricing Period */}
          <Text>Monthly</Text>
          <Switch
            checked={!isMonthly}
            onChange={handlePlanSetting}
            style={{ margin: "10px" }}
          />
          <Text>Yearly</Text>
          <Text className={styles.saveText}>SAVE 25%</Text>
        </Col>

        {/* Cards */}
        {pricingDataList.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card hoverable className={styles.pricingCard}>
              <Text className={styles.pricingTitle}>{item.plan}</Text>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Text
                  className={styles.pricingPrice}
                  strong
                  style={{ fontSize: "24px" }}
                >
                  {/* Money format util */}
                  {formatMoney(item.price)}
                </Text>
                <Text
                  className={styles.pricingPeriod}
                >{`/ ${item.period}`}</Text>
              </div>
              <Text>{`billed ${isMonthly ? "Monthly" : "Yearly"}`}</Text>

              <ul className={styles.featureList}>
                {item.features.map((feature, index) => {
                  const isFeatureIncluded = feature.included !== false;
                  return (
                    <li
                      key={index}
                      className={
                        isFeatureIncluded
                          ? styles.featureIncluded
                          : styles.featureNotIncluded
                      }
                    >
                      {isFeatureIncluded ? (
                        <CheckOutlined
                          style={{ color: "green", marginRight: 5 }}
                        />
                      ) : (
                        <CloseOutlined
                          style={{ color: "grey", marginRight: 5 }}
                        />
                      )}
                      {feature.text}
                    </li>
                  );
                })}
              </ul>

              <Button
                className={styles.pricingButton}
                style={
                  item.buttonType === "default"
                    ? {
                        backgroundColor: "#F1F0FE",
                        color: "#473BF0",
                      }
                    : {
                        color: "#fff",
                      }
                }
                type={item.buttonType}
              >
                <div className={styles.buttonContent}>
                  <Text
                    style={{
                      color: item.buttonType === "default" ? "#473BF0" : "#fff",
                    }}
                  >
                    {item.buttonText}
                  </Text>
                  <ArrowRightOutlined />
                </div>
              </Button>
              <Text className={styles.pricingNote} type="secondary">
                No credit card required
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PricingSection;
