import { Cards, Chart, Countrypk } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import { useEffect, useState } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function App() {
  const [covidData, SetCovidData] = useState({});
  useEffect(() => {
    const dataItem = async () => {
      const data = await fetchData();
      SetCovidData(data);
    };
    dataItem();
    console.log(covidData);
  }, []);
  return (
    <>
      <Title
        style={{ textAlign: 'center', marginTop: '2rem', color: '#FFD369' }}>
        آمار کرونا
      </Title>
      <div className={styles.container}>
        <Cards data={covidData} />
        <Countrypk />
        <Chart />
      </div>
    </>
  );
}

export default App;
