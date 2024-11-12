import { createSlice } from '@reduxjs/toolkit';
import { PopulationData, Prefecture } from '../../lib/types';

// Define the initial state using a TypeScript interface
interface CounterState {
  prefectures: Array<Prefecture>;
  populationData: Array<PopulationData>;
  curPrefName: string;
  curAge: number;
  selectedPrefs: number[];
}

const initialState: CounterState = {
  prefectures: [],
  populationData: [],
  curPrefName: '',
  curAge: 0,
  selectedPrefs: [],
};

const resasSlice = createSlice({
  name: 'resas',
  initialState,
  reducers: {
    loadPrefSuccess: (state, action) => {
      state.prefectures = action.payload;
    },
    loadPopulationDataSuccess: (state, action) => {
      state.populationData.push({ prefName: state.curPrefName, data: action.payload });
    },
    setCurAge: (state, action) => {
      state.curAge = action.payload;
    },
    setCurPrefName: (state, action) => {
      const curPrefName = state.prefectures.filter((item) => item.prefCode === action.payload)[0]
        .prefName;
      state.curPrefName = curPrefName;
    },
    removePopulationData: (state, action) => {
      const prefName = state.prefectures.filter((item) => item.prefCode === action.payload)[0]
        .prefName;
      const newData = state.populationData.filter((item) => item.prefName !== prefName);
      state.populationData = [...newData];
    },
    addPref: (state, action) => {
      state.selectedPrefs.push(action.payload);
    },
    rmvPref: (state, action) => {
      const newPref = state.selectedPrefs.filter((pref) => pref !== action.payload);
      state.selectedPrefs = newPref;
    },
  },
});

export const {
  loadPrefSuccess,
  loadPopulationDataSuccess,
  setCurAge,
  setCurPrefName,
  removePopulationData,
  addPref,
  rmvPref,
} = resasSlice.actions;
export default resasSlice.reducer;
