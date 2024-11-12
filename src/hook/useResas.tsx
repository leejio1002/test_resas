import { useDispatch, useSelector } from 'react-redux';
import { fetchPopulationData, fetchPrefectures } from '../api/resas';
import { RootState } from '../redux/store';
import { useCallback } from 'react';
import {
  removePopulationData,
  setCurPrefName,
  setCurAge,
  addPref,
  rmvPref,
} from '../redux/slices/resasSlice';
export default function useResas() {
  const dispatch = useDispatch();
  const { prefectures, curAge, populationData, selectedPrefs } = useSelector(
    (state: RootState) => state.resas,
  );

  const loadPrefectures = useCallback(async () => {
    await fetchPrefectures(dispatch);
  }, []);

  const loadPopulationData = useCallback(
    async (prefCode: number) => {
      await fetchPopulationData(prefCode, dispatch);
    },
    [dispatch],
  );
  const rmvPopulationData = useCallback((code: number) => {
    dispatch(removePopulationData(code));
  }, []);
  const setCurPref = useCallback((code: number) => {
    dispatch(setCurPrefName(code));
  }, []);
  const setCurrentAge = useCallback((curAge: number) => {
    dispatch(setCurAge(curAge));
  }, []);
  const addPrefecture = useCallback((code: number) => {
    dispatch(addPref(code));
  }, []);
  const rmvPrefecture = useCallback((code: number) => {
    dispatch(rmvPref(code));
  }, []);
  return {
    prefectures,
    curAge,
    populationData,
    selectedPrefs,
    loadPrefectures,
    loadPopulationData,
    rmvPopulationData,
    setCurPref,
    setCurrentAge,
    addPrefecture,
    rmvPrefecture,
  };
}
