import React, { useEffect } from 'react';
import { CheckBox as PrefectureCard } from '../atoms/checkbox/checkBox.components';
import useResas from '../../hook/useResas';
// import {loadPrefectures} from "../../hook/useResas";

const Prefectures: React.FC = () => {
  const {
    prefectures,
    selectedPrefs,
    loadPrefectures,
    loadPopulationData,
    rmvPopulationData,
    setCurPref,
    addPrefecture,
    rmvPrefecture,
  } = useResas();
  const handleCheck = (checked: boolean, code: number) => {
    setCurPref(code);
    if (checked) {
      addPrefecture(code);
      loadPopulationData(code);
    } else {
      rmvPrefecture(code);
      rmvPopulationData(code);
    }
  };
  useEffect(() => {
    loadPrefectures();
  }, []);

  return (
    <div className="bg-gray-900  flex justify-center items-center ">
      <div className="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 p-4 w-full">
        {prefectures.map((item) => (
          <div key={item.prefCode} className="flex justify-center items-center">
            <PrefectureCard
              checked={selectedPrefs.includes(item.prefCode) ? true : false}
              id={item.prefName}
              label={item.prefName}
              code={item.prefCode}
              onCheck={handleCheck}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Prefectures);
