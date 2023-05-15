import React, { useRef, useEffect, useState } from 'react';
import './main.css';
import { useNavigate } from 'react-router';
import ProductItem from './ProductItem';

function ListProduct() {
  const navigate = useNavigate();
  const [items, setProductList] = useState([]);
  const product_name = useRef();

  function getList(url) {
    fetch(url)
      .then(response => { return response.json(); })
      .then(data => { setProductList(data); });
  }

  useEffect(() => { getList('/list'); }, []);

  return (
    <>
      <h2>상품목록</h2>
      상품명: <input name='product_name' ref={product_name} />
      <button type='button' onClick={() => {
        getList(`/list?product_name=${product_name.current.value}`)
      }}>조회</button>
      <br /><br />

      <button onClick={() => navigate('/write')}>상품등록</button>
      <hr />
      등록된 상품수: {items.length}
      <br /><br />
      <div style={{
        display: 'grid',
        gridTemplateRows: '1fr',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
      }}>
        {items.map(
          ({ product_code, product_name, price, filename }) => (
            <ProductItem
              product_code={product_code}
              product_name={product_name}
              price={price}
              filename={filename}
              key={product_code}
            />
          )
        )}
      </div>
    </>
  );
};

export default ListProduct;