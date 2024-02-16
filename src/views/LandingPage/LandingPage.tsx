/**
 * @description Landing Page
 * @author Luo Wang
 */

import React, { FC, useEffect } from "react";
import styles from "./LandingPage.module.less";
import PricingSection from "@/components/Content/PricingAndPlans";
import FeaturesSection from "@/components/Content/Features";
import SectionTilte from "@/components/Content/SectionTitle";
import {
  FeatureTitle,
  PricingTitle,
  features,
  pricingDataMonth,
} from "@/utils/constants";
import { useDispatch } from "react-redux";
import { loadData } from "@/store/pricingReducer";

const LandingPage: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData(pricingDataMonth));
  }, []);

  return (
    <div className={styles.landingPage}>
      <div>
        <SectionTilte data={PricingTitle} />
      </div>

      <div>
        <PricingSection />
      </div>

      <div>
        <SectionTilte data={FeatureTitle} />
      </div>

      <div>
        <FeaturesSection data={features} />
      </div>
    </div>
  );
};

export default LandingPage;
