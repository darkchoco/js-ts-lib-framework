import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import './main.css';

function WriteProduct() {
  const navigate = useNavigate();
  const product_name = useRef();
  const price = useRef();
  const description = useRef();
  const img = useRef();

  return (
    <>
      <h2>상품 정보 등록</h2>
      <table>
        <tbody>
          <tr>
            <td>상품명</td>
            <td><input ref={product_name} /></td>
          </tr>
          <tr>
            <td>가격</td>
            <td><input type='number' ref={price} /></td>
          </tr>
          <tr>
            <td>상품설명</td>
            <td><textarea rows='5' cols='60' ref={description} /></td>
          </tr>
          <tr>
            <td>상품이미지</td>
            <td>
              <input type='file' ref={img} />
            </td>
          </tr>
          <tr>
            <td colSpan='2' align='center'>
              <button type='button' onClick={() => {
                const form = new FormData();
                form.append('product_name', product_name.current.value);
                form.append('price', price.current.value);
                form.append('description', description.current.value);
                form.append('img', img.current.files[0]);
                fetch('/insert', {
                  method: 'post',
                  encType: 'multipart/form-data',
                  body: form
                }).then(() => {
                  navigate('/');
                });
              }}>확인</button>
              <button onClick={() => navigate('/')}>목록</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default WriteProduct;