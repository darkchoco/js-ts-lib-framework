import { useEffect, useState } from 'react';
import { fetchCountries } from '../api.js';
import CountryList from '../components/CountryList.jsx';
import Searchbar from '../components/Searchbar.jsx';
import style from './Home.module.css';

export default function Home() {
  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchCountries();
    setCountries(data);
  };

  // 마운트 되었을 때 딱 한 번만 호출되게 한다.
  useEffect(() => {
    setInitData();
  }, []);

  return (
    <div className={ style.container }>
      <Searchbar/>
      <CountryList countries={ countries }/>
    </div>
  );
}
