import CountryItem from './CountryItem.jsx';
import style from './CountryList.module.css';

export default function CountryList({ countries }) {
  return (
    <div className={ style.container }>
      { countries.map((country) => (
        <CountryItem key={ country.code } { ...country } />
      )) }
    </div>
  );
}

// 혹시나 CountryList의 props인 'countries'의 값이 배열이 아니면 map method를 썼을 때 오류가 발생하기 때문에
// 디폴트 값으로 아래와 같이 빈 배열을 지정한다.
CountryList.defaultProps = {
  countries: [],
};