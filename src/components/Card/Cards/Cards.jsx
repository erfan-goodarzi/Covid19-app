import Box from '../Box';
import { Row, Spin } from 'antd';
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <Spin size='large' />;
  }

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
