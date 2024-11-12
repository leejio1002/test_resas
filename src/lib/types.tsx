export interface Prefecture {
  prefCode: number;
  prefName: string;
}
export interface PopulationData {
  prefName: string;
  data: Array<PopulationDataByAge>;
}

export interface PopulationDataByAge {
  label: string;
  data: Array<PopulationDataByYear>;
}

export interface PopulationDataByYear {
  value: number;
  year: number;
}
