import Box from '../Box';
import { Row } from 'antd';
const Cards = () => {
  return (
    <div>
      <Row gutter={48}>
        <Box title='مبتلا شده' color='#007bff' />
        <Box title='بهبود یافته' color='#53f205' />
        <Box title='فوت شده' color='#ff000d' />
      </Row>
    </div>
  );
};

export default Cards;
