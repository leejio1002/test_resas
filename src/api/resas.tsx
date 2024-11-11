import { PREFECTURE_URL, RESAS_KEY } from '../lib/production_Const';
export const fetchPrefectures = async () => {
  const response = await fetch(PREFECTURE_URL, {
    method: 'GET',
    headers: { 'X-API-KEY': RESAS_KEY },
  });
  const { result } = await response.json();
};
