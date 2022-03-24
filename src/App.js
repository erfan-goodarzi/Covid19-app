import { Cards, Chart, Countrypk } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import { useEffect, useState } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function App() {
  const [Data, SetData] = useState();
  useEffect(() => {
    const data = fetchData();
    data.then((res) => {
      SetData(res);
    });
  }, []);
  return (
    <>
      <Title style={{textAlign: 'center' , marginTop: '2rem'}}>سرشماری کرونا</Title>
      <div className={styles.container}>
        <Cards data={Data} />
        <Countrypk />
        <Chart />
      </div>
    </>
  );
}

export default App;
