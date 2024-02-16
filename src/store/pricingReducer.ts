/**
 * @description Reducer of Pricing and Plan (Redux)
 * @author Luo Wang
 */

import { planFeaturesType } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ButtonType } from "antd/es/button";

export interface PricingDataType {
  plan: string;
  price: number;
  period: string;
  features: planFeaturesType[];
  buttonText: string;
  buttonType: ButtonType;
}

export const INIT_STATE: PricingDataType[] = [
  {
    plan: "",
    price: 0,
    period: "",
    features: [{ included: false, text: "" }],
    buttonText: "",
    buttonType: "default",
  },
];

export const pricingSlice = createSlice({
  name: "pricing",
  initialState: INIT_STATE,
  reducers: {
    loadData(
      states: PricingDataType[],
      action: PayloadAction<PricingDataType[]>
    ) {
      return action.payload;
    },
  },
});

export const { loadData } = pricingSlice.actions;

export default pricingSlice.reducer;
