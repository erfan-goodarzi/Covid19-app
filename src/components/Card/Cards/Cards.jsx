import Box from '../Box';
import { Row, Spin } from 'antd';
import styles from '../Card.module.css'
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  return confirmed ? (
    <div>
      <Row className={styles.row} gutter={48}>
        <Box
          title='مبتلا شده'
          color='#007bff'
          covidNumber={confirmed.value}
          date={lastUpdate}
        />
        <Box
          title='بهبود یافته'
          color='#53f205'
          covidNumber={recovered.value}
          date={lastUpdate}
        />
        <Box
          title='فوت شده'
          color='#ff000d'
          covidNumber={deaths.value}
          date={lastUpdate}
        />
      </Row>
    </div>
  ) : (
    <Spin size='large' />
  );
};

export default Cards;
