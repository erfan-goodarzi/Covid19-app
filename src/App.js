import { Cards, Charts, Countrypk } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import { useEffect, useState } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function App() {
  const [covidData, SetCovidData] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchData();
      SetCovidData(data);
    };
    fetchApi();
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
        <Charts />
      </div>
    </>
  );
}

export default App;
