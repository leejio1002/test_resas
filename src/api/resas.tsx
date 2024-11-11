import { PREFECTURE_URL, RESAS_KEY } from '../lib/production_Const';
import { Dispatch } from '@reduxjs/toolkit';
import { loadPrefSuccess } from '../redux/slices/resasSlice';

export const fetchPrefectures = async (dispatch:Dispatch) => {
  try {
    const response = await fetch(PREFECTURE_URL, {
      method: 'GET',
      headers: { 'X-API-KEY': RESAS_KEY },
    });
    const { result } = await response.json();
    dispatch(loadPrefSuccess(result));
  } catch (error) {
    console.log(error);
  }
};
