import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { fetchCountry } from '../../api';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log('search:', val);
}
const Countrypk = () => {
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
        defaultValue="جهانی"
        bordered={false}
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }>
        {Countries.map((item) => (
          <Option value={item}>{item}</Option>
        ))}
      </Select>{' '}
    </div>
  );
};

export default Countrypk;
