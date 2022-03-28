import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { fetchCountry } from '../../api';

const { Option } = Select;

const Countrypk = ({ onChanged }) => {
  const [Countries, setContries] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchCountry();
      setContries(data);
    };
    fetchApi();
  }, []);
  return (
    <div>
      {' '}
      <Select
        style={{
          marginTop: '3rem',
          width: '264px',
          direction: 'rtl',
          color: '#eee',
          borderBottom: '2px solid #ffd369 ',
        }}
        showSearch
        placeholder='یک کشور را انتخاب کنید'
        optionFilterProp='children'
        defaultValue='جهانی'
        bordered={false}
        onChange={onChanged}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }>
        {Countries.map((item) => (
          <Option key={item.name} value={item.iso2}>
            {item.name}
          </Option>
        ))}
      </Select>{' '}
    </div>
  );
};

export default Countrypk;
