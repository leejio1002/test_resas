import React, { useState } from 'react';

const PrefectureCard: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('clicked');
  };

  return (
    <label className="bg-gray-200 text-gray-900 rounded-lg px-4 py-2 m-1 flex items-center space-x-2">
      <input type="checkbox" checked={checked} onChange={handleChange} className="mr-2" />
      <span></span>
    </label>
  );
};

export default PrefectureCard;
