import React, { useEffect, useState } from 'react';
import { CheckBox as PrefectureCard } from '../atoms/checkbox/checkBox.components';
import useResas from '../../hook/useResas';
import { useDispatch } from 'react-redux';
import { removePopulationData, setCurPrefName } from '../../redux/slices/resasSlice';
// import {loadPrefectures} from "../../hook/useResas";

const Prefectures: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { loadPrefectures, loadPopulationData, prefectures } = useResas();
  const handleCheck = (check: boolean, code: number) => {
    setChecked(check);
    dispatch(setCurPrefName(code));
    if (checked) {
      loadPopulationData(code);
    } else {
      dispatch(removePopulationData(code));
    }
  };
  useEffect(() => {
    loadPrefectures();
  }, []);

  return (
    <div className="bg-gray-900  flex justify-center items-center">
      <div className="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 gap-4 p-4">
        {prefectures.map((item) => (
          <PrefectureCard
            checked={}
            key={item.prefCode}
            id={item.prefName}
            label={item.prefName}
            code={item.prefCode}
            onCheck={handleCheck}
          />
        ))}
      </div>
    </div>
  );
};

export default Prefectures;
