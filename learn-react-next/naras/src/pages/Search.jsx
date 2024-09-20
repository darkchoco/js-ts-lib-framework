import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSearchResults } from '../api.js';
import Searchbar from '../components/Searchbar.jsx';
import CountryList from '../components/CountryList.jsx';
import style from './Search.module.css';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q');

  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, [q]);

  return (
    <div className={ style.container }>
      <Searchbar q={ q }></Searchbar>
      <div>
        <b>{ q }</b> 검색결과
      </div>
      <CountryList countries={ countries }/>
    </div>
  );
}
