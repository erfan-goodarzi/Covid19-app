import Box from '../Box';
import { Row, Spin } from 'antd';
import moment from 'moment-jalaali';
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <Spin size='large' />;
  }
  const d = new Date(2022,2,21)

  console.log();
  console.log(new Intl.DateTimeFormat('fa-IR').format(d));
  return (
    <div>
      <Row gutter={48}>
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
  );
};

export default Cards;
