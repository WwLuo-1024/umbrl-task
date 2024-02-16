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
  name: keyof typeof AllIcons; // 'name' 的类型是 'AllIcons' 中所有键的联合类型
};

export interface FeaturesType {
  title: string;
  description: string;
  icon: IconName;
}
