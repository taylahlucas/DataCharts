export interface UnitData {
  name: string;
  value: number;
  unit: string;
};

export interface Data {
  title: string;
  attributes: Data[];
};

export interface IndexedData {
  index: number;
  title: string;
  attributes: UnitData[];
};