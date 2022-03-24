import 'antd/dist/antd.css';
import { Card, Col } from 'antd';
import styles from './Card.module.css';
const Box = ({ data, title, color }) => {
  return (
    <>
      <div className='site-card-wrapper' style={{ marginTop: '3rem' }}>
        <Col>
          <Card
            className={styles.box}
            headStyle={{ color: '#EEEEEE', borderBottom: `3px solid ${color}` }}
            title={title}
            bordered={false}>
            <p style={{ color: '#eee' }}>تعداد : 9</p>
            <p style={{ color: '#eee' }}>تاریخ : امروز 29 آذر 1401</p>
            <p style={{ color: '#eee' }}>
              تعداد افراد {title} بر اثر این بیماری.
            </p>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default Box;
