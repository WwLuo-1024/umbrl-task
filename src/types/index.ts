/**
 * @description Types definition
 * @author Luo Wang
 */

import * as AllIcons from "@ant-design/icons";
export interface SectionTilteTypes {
  title: string;
  subTitle: string[];
}

export interface planFeaturesType {
  included: boolean;
  text: string;
}

export type IconName = keyof typeof AllIcons;

export type IconProps = {
  name: keyof typeof AllIcons;
};

export interface FeaturesType {
  title: string;
  description: string;
  icon: IconName;
}
