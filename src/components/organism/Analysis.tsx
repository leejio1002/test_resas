import React, { useMemo } from 'react';
import PopulationChart from './PopulationChart';
import AgeSelector from '../atoms/select/select.component';
import useResas from '../../hook/useResas';

const Analysis: React.FC = () => {
  const { curAge, populationData, setCurrentAge } = useResas();

  // Handle Age Change
  const handleChange = (curAge: number) => {
    setCurrentAge(curAge);
  };

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
          className="bg-gray-900 flex justify-center items-center pb-4"
        />
      )}

      <PopulationChart curAge={curAge} populationData={populationData} className="mx-16" />
    </div>
  );
};

export default React.memo(Analysis);
