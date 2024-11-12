import React, { useMemo } from 'react';
import PopulationChart from './PopulationChart';
import AgeSelector from '../atoms/select/select.component';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCurAge } from '../../redux/slices/resasSlice';

const Analysis: React.FC = () => {
  const dispatch = useDispatch();

  // Handle Age Change
  const handleChange = (curAge: number) => {
    dispatch(setCurAge(curAge));
  };

  const curAge = useSelector((state: RootState) => state.resas.curAge);
  const populationData = useSelector((state: RootState) => state.resas.populationData);

  // Memoize the options array to prevent unnecessary re-computations
  const options = useMemo(() => {
    const newOptions: { label: string; value: number }[] = [];

    if (populationData.length > 0) {
      populationData[0].data.forEach((item, index) => {
        newOptions.push({ label: item.label, value: index });
      });
    }

    return newOptions;
  }, [populationData]);

  return (
    <div className="bg-gray-900">
      {options.length > 0 && (
        <AgeSelector
          options={options}
          curValue={curAge}
          handleChange={handleChange}
          className="bg-gray-900 flex justify-center items-center pb-12"
        />
      )}

      <PopulationChart curAge={curAge} populationData={populationData} className="mx-12" />
    </div>
  );
};

export default React.memo(Analysis);
