import type { ServerFeature, Released } from "./commons";
type ExpiryTime = number | undefined | null;

export default interface Item {
  Id: number;
  IsReleased: Released;
  Category: string;
  Rarity: string;
  Quality: number;
  Tags: string[];
  Shops: Shop[];
  Craftable: Released;
  StageDrop: Released;
  Icon: string;
  Name: string;
  Desc: string;
  ConsumeType?: string;
  ImmediateUse?: boolean;
  Contains?: ContainArray[];
  ContainsGlobal?: ContainArray[];
  ContainsCn?: ContainArray[];
  ExpiryTime?: ServerFeature<ExpiryTime>;
  ShiftingCraftQuality?: number;
  EventBonus?: number[][];
  EventBonusGlobal?: number[][];
  EventBonusCn?: number[][];
  ExpValue?: number;
}

export interface Shop {
  ShopCategory: string;
  Released: Released;
  Amount: number;
  CostType: string;
  CostId: number;
  CostAmount: number;
}

export type ContainArray = [number, number, number, number];
export interface Contain {
  id: number;
  probability: number;
  amount: number;
  quality: number;
}
