import 'antd/dist/antd.css';
import { Card, Col } from 'antd';
import styles from './Card.module.css';
import CountUp from 'react-countup';
const Box = ({ title, color, covidNumber, date }) => {
  return (
    <>
      <div className='site-card-wrapper' style={{ marginTop: '3rem' }}>
        <Col>
          <Card
            className={styles.box}
            headStyle={{ color: '#EEEEEE', borderBottom: `3px solid ${color}` }}
            title={title}
            bordered={false}>
            <p
              style={{
                color: 'rgb(252 208 104)',
                fontSize: '25px',
                fontWeight: '600',
              }}>
              <CountUp start={0} end={covidNumber}  duration={2.75} separator="," />
            </p>
            <p style={{ color: '#eee' }}>تاریخ : {new Date(date).toDateString()}</p>
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
