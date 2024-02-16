/**
 * @description contant mock data
 * @author Luo Wang
 */
import { PricingDataType } from "@/store/pricingReducer";
import { FeaturesType, SectionTilteTypes } from "@/types";
//Mock Data of "Pricing & Plans" Title
export const PricingTitle: SectionTilteTypes = {
  title: "Pricing & Plans",
  subTitle: [
    "With lots of unique blocks, you can easily build a page without coding.",
    "Build your next consultancy website within few minutes.",
  ],
};

//Mock Data of "Check Our Features" Title
export const FeatureTitle: SectionTilteTypes = {
  title: "Check Our Features",
  subTitle: [
    "With lots of unique blocks, you can easily build a page without coding.",
    "Build your next consultancy website within few minutes.",
  ],
};

//Mock Data of "Pricing & Plans" in Month
export const pricingDataMonth: PricingDataType[] = [
  {
    plan: "STARTER",
    price: 19,
    period: "month",
    features: [
      { included: true, text: "Commercial License" },
      { included: true, text: "100+ HTML UI Elements" },
      { included: true, text: "01 Domain Support" },
      { included: false, text: "6 Month Premium Support" },
      { included: false, text: "Lifetime Updates" },
    ],
    buttonText: "Start Free Trial",
    buttonType: "default",
  },
  {
    plan: "STANDARD",
    price: 49,
    period: "month",
    features: [
      { included: true, text: "Commercial License" },
      { included: true, text: "100+ HTML UI Elements" },
      { included: true, text: "01 Domain Support" },
      { included: true, text: "6 Month Premium Support" },
      { included: false, text: "Lifetime Updates" },
    ],
    buttonText: "Start Free Trial",
    buttonType: "primary",
  },
  {
    plan: "PREMIUM",
    price: 99,
    period: "month",
    features: [
      { included: true, text: "Commercial License" },
      { included: true, text: "100+ HTML UI Elements" },
      { included: true, text: "01 Domain Support" },
      { included: true, text: "6 Month Premium Support" },
      { included: true, text: "Lifetime Updates" },
    ],
    buttonText: "Start Free Trial",
    buttonType: "default",
  },
];

//Mock Data of "Pricing & Plans" in Year
export const pricingDataYear: PricingDataType[] = [
  {
    plan: "STARTER",
    price: 199,
    period: "year",
    features: [
      { included: true, text: "Commercial License" },
      { included: true, text: "100+ HTML UI Elements" },
      { included: true, text: "01 Domain Support" },
      { included: false, text: "6 Month Premium Support" },
      { included: false, text: "Lifetime Updates" },
    ],
    buttonText: "Start Free Trial",
    buttonType: "default",
  },
  {
    plan: "STANDARD",
    price: 499,
    period: "year",
    features: [
      { included: true, text: "Commercial License" },
      { included: true, text: "100+ HTML UI Elements" },
      { included: true, text: "01 Domain Support" },
      { included: true, text: "6 Month Premium Support" },
      { included: false, text: "Lifetime Updates" },
    ],
    buttonText: "Start Free Trial",
    buttonType: "primary",
  },
  {
    plan: "PREMIUM",
    price: 999,
    period: "year",
    features: [
      { included: true, text: "Commercial License" },
      { included: true, text: "100+ HTML UI Elements" },
      { included: true, text: "01 Domain Support" },
      { included: true, text: "6 Month Premium Support" },
      { included: true, text: "Lifetime Updates" },
    ],
    buttonText: "Start Free Trial",
    buttonType: "default",
  },
];

//Mock Data of "Check Our Features"
export const features: FeaturesType[] = [
  {
    title: "Quick setup process",
    description:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon: "SettingOutlined",
  },
  {
    title: "Create custom orders",
    description:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon: "ShoppingCartOutlined",
  },
  {
    title: "Multiple coupons",
    description:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon: "DisconnectOutlined",
  },
  {
    title: "Organize your campaigns",
    description:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon: "ApiOutlined",
  },
  {
    title: "Manage customers",
    description:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon: "TeamOutlined",
  },
  {
    title: "Track progress fase",
    description:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon: "RadarChartOutlined",
  },
];
