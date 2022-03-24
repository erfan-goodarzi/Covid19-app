import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';

const Box = ({ data, title }) => {
  return (
    <>
      <div className='site-card-wrapper' style={{ marginTop: '3rem' }}>
        <Col>
          <Card title={title} bordered={false}>
            Card content
          </Card>
        </Col>
      </div>
    </>
  );
};

export default Box;
