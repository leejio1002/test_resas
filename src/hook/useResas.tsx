import { useDispatch, useSelector } from 'react-redux';
import { fetchPopulationData, fetchPrefectures } from '../api/resas';
import { RootState } from '../redux/store';
import { useCallback } from 'react';

export default function useResas() {
  const dispatch = useDispatch();
  const { prefectures } = useSelector((state: RootState) => state.resas);

  const loadPrefectures = useCallback(async () => {
    await fetchPrefectures(dispatch);
  }, []);

  const loadPopulationData = useCallback(
    async (prefCode: number) => {
      await fetchPopulationData(prefCode, dispatch);
    },
    [dispatch],
  );

  return {
    prefectures,
    loadPrefectures,
    loadPopulationData,
  };
}
