import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

function ProductItem({product_code, product_name, price, filename}) {
  let loading = false;

  const url = `http://localhost:8081/static/images/${ filename }`;

  if (loading)
    return (<div>loading</div>);
  else {
    let img = '[상품 이미지 미등록]<br />';

    if (filename !== '-')
      img = `<img src=${ url } width='200px' height='200px' alt=""/><br />`;

    return (
      <div style={ {margin: '5px'} }>
        <span dangerouslySetInnerHTML={ {__html: img} }></span>
        <Link to={ `/detail/${ product_code }` }>
          상품명: { product_name }<br/>
          가격: { price } 유로
        </Link>
        <br/><br/>
      </div>
    );
  }
}

export default ProductItem;
