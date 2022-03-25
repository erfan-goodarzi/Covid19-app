import React, { useEffect, useState } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import styles from './Chart.module.css';
Chart.register(...registerables);
const Charts = () => {
  const [DailyData, setDailyData] = useState([]);
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

  const data = {
    labels: DailyData.map(({ date }) => new Date(date).toLocaleDateString()),
    datasets: [
      {
        data: DailyData.map((data) => data.confirmed),
        label: 'مبتلا شده',
        borderColor: '#3333ff',
        fill: true,
      },
      {
        data: DailyData.map((data) => data.deaths),
        label: 'فوت شده',
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        fill: true,
      },
      {
        data: DailyData.map((data) => data.recovered),
        label: 'بهبود یافته',
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        fill: true,
      },
    ],
  };

  const line = DailyData[0] ? <Line data={data} options={options} /> : null;
  return <div className={styles.chart}>{line}</div>;
};

export default Charts;
