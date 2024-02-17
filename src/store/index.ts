/**
 * @description main file of redux store
 * @author Luo Wang
 */
import { configureStore } from "@reduxjs/toolkit";
import pricingReducer, { PricingDataType } from "./pricingReducer";

export type StateType = {
  pricingDataList: PricingDataType;
};

export default configureStore({
  reducer: {
    pricingDataList: pricingReducer,
  },
});
