import { Released } from "./commons";

export enum School {
  Gehenna = "Gehenna",
  Millennium = "Millennium",
  Trinity = "Trinity",
  Abydos = "Abydos",
  Shanhaijing = "Shanhaijing",
  Hyakkiyako = "Hyakkiyako",
  RedWinter = "RedWinter",
  Valkyrie = "Valkyrie",
  ETC = "ETC",
  SRT = "SRT",
  Arius = "Arius",
  Tokiwadai = "Tokiwadai",
  Sakugawa = "Sakugawa",
}

export type StarGrade = 1 | 2 | 3;

export type SquadType = "Main" | "Support";

export enum TacticRole {
  DamageDealer = "DamageDealer",
  Tanker = "Tanker",
  Supporter = "Supporter",
  Healer = "Healer",
  Vehicle = "Vehicle",
}

export interface Summon {
  Id: number;
  SourceSkill: string;
  InheritCasterStat: string[];
  InheritCasterAmount: number[][];
  ObstacleMaxHP1?: number;
  ObstacleMaxHP100?: number;
}

export type Position = "Front" | "Middle" | "Back";

export enum BulletType {
  Explosion = "Explosion",
  Pierce = "Pierce",
  Mystic = "Mystic",
  Sonic = "Sonic",
}

export enum ArmorType {
  LightArmor = "LightArmor",
  HeavyArmor = "HeavyArmor",
  Unarmed = "Unarmed",
  ElasticArmor = "ElasticArmor",
}

export type BattleAdaptation = 0 | 1 | 2 | 3 | 4 | 5;
export type ElementSlot1 = "Hat" | "Shoes" | "Gloves";
export type ElementSlot2 = "Hairpin" | "Bag" | "Badge";
export type ElementSlot3 = "Watch" | "Charm" | "Necklace";
export type ElementSlots = [ElementSlot1, ElementSlot2, ElementSlot3];

export type StatType = "AttackPower" | "MaxHP" | "DefensePower" | "HealPower";
export type PoolType = 0 | 1 | 2;

export interface Skill {
  SkillType: string;
  Effects: Effect[];
  Name?: string;
  Desc?: string;
  Parameters?: string[][];
  Cost?: number[];
  Duration?: number;
  Range?: number;
  Radius?: Radius[];
  Icon?: string;
  EffectCombine?: string[];
  EffectCombineLabel?: EffectCombineLabel;
  ExtraSkills?: ExtraSkill[];
  InheritScale?: InheritScale;
  HideCalculation?: boolean;
}

export interface Effect {
  Type: string;
  Hits?: number[];
  Scale?: number[];
  Frames?: Frames;
  CriticalCheck?: string;
  Duration?: number;
  Period?: number;
  ExtraStatSource?: string;
  ExtraStatRate?: number[];
  Stat?: string;
  Value?: number[][];
  Channel?: number;
  HitsParameter?: number;
  Chance?: number;
  Icon?: string;
  SubstituteCondition?: string;
  SubstituteScale?: number[];
  MultiplySource?: string;
  MultiplierConstant?: number[];
  HitFrames?: number[];
  IgnoreDelay?: number[];
  StackSame?: number;
  IgnoreDef?: number[];
  OverrideSlot?: string;
  Restrictions?: Restriction[];
  ZoneHitInterval?: number;
  ZoneDuration?: number;
  Critical?: number;
  HideFormChangeIcon?: boolean;
  SourceStat?: string;
  ExtraDamageSource?: ExtraDamageSource;
}

export interface Frames {
  AttackEnterDuration: number;
  AttackStartDuration: number;
  AttackEndDuration: number;
  AttackBurstRoundOverDelay: number;
  AttackIngDuration: number;
  AttackReloadDuration: number;
  AttackReadyStartDuration?: number;
  AttackReadyEndDuration?: number;
}

export interface ExtraDamageSource {
  Side: string;
  Stat: string;
  Multiplier: number[];
  SliderTranslation: string;
  SliderStep: number[];
  SliderLabel: number[];
  SliderLabelSuffix: string;
  SimulatePerHit: boolean;
}

export interface Restriction {
  Property: string;
  Operand: string;
  Value: any;
}

export interface Radius {
  Type: string;
  Radius?: number;
  Width?: number;
  Height?: number;
  Degree?: number;
  ExcludeRadius?: number;
}

export interface EffectCombineLabel {
  Icon?: string[];
  StackLabel?: string[];
  DisableFirst?: boolean;
  StackLabelTranslated?: string[];
}

export interface ExtraSkill {
  Id: string;
  SkillType: string;
  Name: string;
  Desc: string;
  Parameters: string[][];
  Cost?: number[];
  Duration?: number;
  Range?: number;
  Radius?: ExtraSkillRadius[];
  Icon: string;
  Effects: ExtraSkillEffect[];
  TSAId?: number;
}

export interface ExtraSkillRadius {
  Type: string;
  Width?: number;
  Height?: number;
  Radius?: number;
}

export interface ExtraSkillEffect {
  Type: string;
  CriticalCheck: string;
  Scale: number[];
  Hits?: number[];
  HitsParameter?: number;
  IgnoreDef?: number[];
  ApplyStability?: boolean;
}

export interface InheritScale {
  Skill: string;
  EffectId: number;
  Parameter: number;
}

export interface Weapon {
  Name: string;
  Desc: string;
  AdaptationType: string;
  AdaptationValue: number;
  AttackPower1: number;
  AttackPower100: number;
  MaxHP1: number;
  MaxHP100: number;
  HealPower1: number;
  HealPower100: number;
  StatLevelUpType: string;
}

export interface Gear {
  Released?: boolean[];
  StatType?: string[];
  StatValue?: number[][];
  Name?: string;
  Desc?: string;
  TierUpMaterial?: number[][];
  TierUpMaterialAmount?: number[][];
}

export default interface Student {
  Id: number;
  IsReleased: Released;
  DefaultOrder: number;
  PathName: string;
  DevName: string;
  Name: string;
  School: School;
  Club: string;
  StarGrade: StarGrade;
  SquadType: SquadType;
  TacticRole: TacticRole;
  Summons: Summon[];
  Position: Position;
  BulletType: BulletType;
  ArmorType: ArmorType;
  StreetBattleAdaptation: BattleAdaptation;
  OutdoorBattleAdaptation: BattleAdaptation;
  IndoorBattleAdaptation: BattleAdaptation;
  WeaponType: string;
  WeaponImg: string;
  Cover: boolean;
  Equipment: ElementSlots;
  CollectionBG: string;
  FamilyName: string;
  PersonalName: string;
  SchoolYear: string;
  CharacterAge: string;
  Birthday: string;
  CharacterSSRNew: string;
  ProfileIntroduction: string;
  Hobby: string;
  CharacterVoice: string;
  BirthDay: string;
  Illustrator: string;
  Designer: string;
  CharHeightMetric: string;
  CharHeightImperial?: string;
  StabilityPoint: number;
  AttackPower1: number;
  AttackPower100: number;
  MaxHP1: number;
  MaxHP100: number;
  DefensePower1: number;
  DefensePower100: number;
  HealPower1: number;
  HealPower100: number;
  DodgePoint: number;
  AccuracyPoint: number;
  CriticalPoint: number;
  CriticalDamageRate: number;
  AmmoCount: number;
  AmmoCost: number;
  Range: number;
  RegenCost: number;
  Skills: Skill[];
  FavorStatType: StatType[];
  FavorStatValue: number[][];
  FavorAlts: number[];
  MemoryLobby: number[];
  MemoryLobbyBGM: string;
  FurnitureInteraction: number[][][];
  FavorItemTags: string[];
  FavorItemUniqueTags: string[];
  IsLimited: PoolType;
  Weapon: Weapon;
  Gear: Gear;
  SkillExMaterial: number[][];
  SkillExMaterialAmount: number[][];
  SkillMaterial: number[][];
  SkillMaterialAmount: number[][];
  TSAId?: number;
  DefensePenetration1?: number;
  DefensePenetration100?: number;
}
