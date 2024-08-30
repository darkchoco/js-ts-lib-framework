import style from './Searchbar.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Searchbar() {
  const [search, setSearch] = useState('');
  const nav = useNavigate();

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onClickSearch();
    }
  };

  const onClickSearch = () => {
    if (search !== '') {
      nav(`/search?q=${ search }`);
    }
  };

  return (
    <div className={ style.container }>
      <input
        placeholder="검색어를 입력하세요..."
        onChange={ onChangeSearch }
        onKeyDown={ onKeyDown }
        value={ search }
      />
      <button onClick={ onClickSearch }>검색</button>
    </div>
  );
}
