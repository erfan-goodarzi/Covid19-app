import { Cards, Charts, Countrypk } from './components';
import styles from './App.module.css';
import { fetchCountryDetails, fetchData } from './api';
import { useEffect, useState } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function App() {
  const [covidData, SetCovidData] = useState({});
  const [countryDetails, SetCountryDetails] = useState({});
  const [isChanged, SetIsChanged] = useState(false);
  const changeCountry = async (value) => {
    const countryDetails = await fetchCountryDetails(value);
    SetCountryDetails(countryDetails);
    SetIsChanged(true);
  };
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
        <Cards data={isChanged ? countryDetails : covidData} />
        <Countrypk onChanged={changeCountry} />
        <Charts country={countryDetails} changedCountry={isChanged} />
      </div>
    </>
  );
}

export default App;
