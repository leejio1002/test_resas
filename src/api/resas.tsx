import { PREFECTURE_URL, RESAS_KEY, GETPOPULATION_URL } from '../lib/production_Const';
import { Dispatch } from '@reduxjs/toolkit';
import { loadPrefSuccess, loadPopulationDataSuccess } from '../redux/slices/resasSlice';

export const fetchPrefectures = async (dispatch: Dispatch) => {
  try {
    const response = await fetch(PREFECTURE_URL, {
      method: 'GET',
      headers: { 'X-API-KEY': RESAS_KEY },
    });
    const { result } = await response.json();
    dispatch(loadPrefSuccess(result));
  } catch (error) {
    console.error(error);
  }
};

export const fetchPopulationData = async (prefCode: number, dispatch: Dispatch) => {
  try {
    const response = await fetch(`${GETPOPULATION_URL}?prefCode=${prefCode}`, {
      method: 'GET',
      headers: { 'X-API-KEY': RESAS_KEY },
    });
    const { result } = await response.json();
    dispatch(loadPopulationDataSuccess(result.data));
  } catch (error) {
    console.log(error);
  }
};
