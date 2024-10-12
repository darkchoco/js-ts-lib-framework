import { useParams } from 'react-router-dom';
import { fetchCountry } from '../api.js';
import { useEffect, useState } from 'react';
import style from './Country.module.css';

export default function Country() {
  const params = useParams();
  const [country, setCountry] = useState('');

  const setInitData = async () => {
    const data = await fetchCountry(params.code);
    setCountry(data);
  };

  useEffect(() => {
    setInitData();
  }, [params.code]);

  // 위의 코드처럼 API를 호출하고 그 결과값(data)를 state에 담아 사용할 때는(useState()) 그 값이 바로 들어와있다는
  // 보장을 할 수 없다. 그래서 아래 코드와 같이 값이 아직 담기지 않았을 경우의 핸들링을 해주어야 한다.
  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className={ style.container }>
      <div className={ style.header }>
        <div className={ style.commonName }>
          { country.flagEmoji }&nbsp;{ country.commonName }
        </div>
        <div className={ style.officialName }>
          { country.officialName }
        </div>
      </div>
      <img src={ country.flagImg } alt={ `${ country.commonName }의 국기 이미지입니다` }/>
      <div className={ style.body }>
        <div>
          <b>코드 : </b>&nbsp;{ country.code }
        </div>
        <div>
          <b>수도 : </b>&nbsp;{ country.capital.join(', ') }
        </div>
        <div>
          <b>지역 : </b>&nbsp;{ country.region }
        </div>
        <div>
          <b>지도 : </b>&nbsp;<a target="_blank" href={ country.googleMapUrl }>{ country.googleMapUrl }</a>
        </div>
      </div>
    </div>
  );
}
