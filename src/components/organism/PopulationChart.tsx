// components/PopulationChart.tsx
'use client';

import React from 'react';
import Highcharts, { SeriesLineOptions } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import {populationData } from '@/types';
import { PopulationData } from '../../lib/types';

interface Props {
  populationData: PopulationData[];
  curAge: number;
  className: string;
}

const PopulationChart: React.FC<Props> = ({ populationData, curAge, className = '' }) => {
  // Extract data for chart options
  const years =
    populationData.length !== 0
      ? populationData[0].data[0].data.map((item) => item.year.toString())
      : [];

  const data = populationData.map((item) => {
    const temp: SeriesLineOptions = {
      type: 'line',
      name: item.prefName,
      data: item.data[curAge].data.map((value) => value.value),
    };
    return temp;
  });

  const options: Highcharts.Options = {
    title: {
      text: undefined,
    },
    xAxis: {
      categories: years,
      title: {
        text: '年度', // "Year" in Japanese
      },
    },
    yAxis: {
      title: {
        text: '人口数', // "Population" in Japanese
      },
      // labels: {
      //   formatter: function () {
      //     return `${this.value}k`; // Format as thousands
      //   },
      // },
    },
    series: data,
    // series:[
    //   {
    //     name: '香川県', // Kagawa
    //     type: 'line',
    //     data: kagawaData,
    //     color: '#00bfff', // Light blue color
    //   },
    //   {
    //     name: '愛媛県', // Ehime
    //     type: 'line',
    //     data: ehimeData,
    //     color: '#6a5acd', // Purple color
    //   },
    // ],
    accessibility: {
      enabled: false,
    },
    legend: {
      align: 'center',
      verticalAlign: 'bottom',
    },
    chart: {
      backgroundColor: '#ffffff', // Dark background
    },
  };

  return (
    <div className={className}>
      {data.length > 0 && <HighchartsReact highcharts={Highcharts} options={options} />}
    </div>
  );
};

export default PopulationChart;
