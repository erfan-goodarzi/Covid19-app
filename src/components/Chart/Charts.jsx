import React, { useEffect, useState } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import styles from './Chart.module.css';
Chart.register(...registerables);
const Charts = ({ country, changedCountry }) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchDailyData();
      setDailyData(data);
    };
    fetchApi();
  }, []);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#EEEEEE',
          font: {
            size: 14,
            family: 'Vazirmatn, sans-serif',
          },
        },
      },
    },
  };

  const lineData = {
    labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
    datasets: [
      {
        data: dailyData.map((data) => data.confirmed),
        label: 'مبتلا شده',
        borderColor: '#3333ff',
        fill: true,
      },
      {
        data: dailyData.map((data) => data.deaths),
        label: 'فوت شده',
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        fill: true,
      },
      {
        data: dailyData.map((data) => data.recovered),
        label: 'بهبود یافته',
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        fill: true,
      },
    ],
  };
  const barData = {
    labels: ['مبتلا شده', 'بهبود یافته', 'فوت شده'],
    datasets: [
      {
        label: 'افراد مبتلا شده',
        data: changedCountry
          ? [country.confirmed.value, country.deaths.value]
          : null,
        backgroundColor: ['rgb(0, 123, 255)', 'rgb(255, 0, 13)'],
        borderWidth: 0,
      },
    ],
  };
  const line = dailyData[0] ? <Line data={lineData} options={options} /> : null;
  const bar = <Bar data={barData} options={options} />;

  return <div className={styles.chart}>{changedCountry ? bar : line}</div>;
};

export default Charts;
