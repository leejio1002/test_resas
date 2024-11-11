import React, { useEffect } from 'react';
import PrefectureCard from '../atoms/PrefectureCard';

const Prefectures: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-5 gap-4 p-4">
        {/* {state.zones.map((zone) => (
          <PrefectureCard key={zone.prefCode} value={zone} />
        ))} */}
      </div>
    </div>
  );
};

export default Prefectures;
