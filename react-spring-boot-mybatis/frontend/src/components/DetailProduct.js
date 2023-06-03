import React, { useRef, useEffect, useState } from 'react';
import './main.css';
import { useNavigate } from 'react-router-dom';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return [data, loading];
}

function DetailProduct() {
  const paths = window.location.href.split('/');
  const url = '/' + paths[paths.length - 2] + '/' + paths[paths.length - 1];
  const [data, loading] = useFetch(url);
  const navigate = useNavigate();
  const product_name = useRef();
  const price = useRef();
  const description = useRef();
  const img = useRef();

  if (loading) {
    return (
      <div>loading</div>
    );
  } else {
    let src = '';
    let image_url;
    console.log('filename:' + data.filename);
    if (data.filename !== '-') {
      src = `http://localhost:8081/static/images/${ data.filename }`;
      image_url = `<img src=${ src } width='300px' height='300px' alt=""/>`;
    } else {
      image_url = '';
    }
    return (
      <>
        <table>
          <tbody>
          <tr>
            <td>상품명</td>
            <td><input ref={ product_name } defaultValue={ data.product_name }/></td>
          </tr>
          <tr>
            <td>가격</td>
            <td><input type="number" ref={ price } defaultValue={ data.price }/></td>
          </tr>
          <tr>
            <td>상품설명</td>
            <td><textarea rows="5" cols="60" ref={ description } defaultValue={ data.description }/></td>
          </tr>
          <tr>
            <td>상품이미지</td>
            <td>
              <span dangerouslySetInnerHTML={ { __html: image_url } }></span>
              <br/>
              <input type="file" ref={ img }/>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <button type="button" onClick={ () => {
                const form = new FormData();
                // form.append('product_code', data.product_code);  // WriteProduct.js 와 달리 이 라인이 추가됨. 상품코드에 대한 Update 니까.
                // form.append('product_name', product_name.current?.value);
                // form.append('description', description.current?.value);
                // form.append('price', description.current?.value);
                // form.append('img', img.current?.files[0]);

                const product = {
                  'product_code': data.product_code,
                  'product_name': product_name.current?.value,
                  'description': description.current?.value,
                  'price': price.current?.value,
                  'filename': ''
                };
                console.log(product);
                const json = JSON.stringify(product);
                const blob = new Blob([json], {
                  type: 'application/json'
                });

                form.append('product', blob);
                form.append('img', img.current?.files[0]);

                fetch('/update', {
                  method: 'post',
                  encType: 'multipart/form-data',
                  body: form
                }).then(() => {
                  navigate('/');
                });
              }
              }>수정
              </button>
              &nbsp;
              <button type="button" onClick={ () => {
                if (window.confirm('삭제할까요?')) {
                  fetch(`/delete?product_code=${ data.product_code }`, { method: 'delete' })
                    .then(() => {
                      navigate('/');
                    });
                }
              }
              }>삭제
              </button>
              &nbsp;
              <button onClick={ () => navigate('/') }>목록</button>
            </td>
          </tr>
          </tbody>
        </table>
      </>
    );
  }
};

export default DetailProduct;
