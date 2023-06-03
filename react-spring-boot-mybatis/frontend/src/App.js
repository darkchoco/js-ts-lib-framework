import React from 'react';
// import { Routes, Route } from 'react-router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ListProduct from './components/ListProduct';
import WriteProduct from './components/WriteProduct';
import DetailProduct from './components/DetailProduct';

function App() {
  console.warn = function no_console() {
  };  // 효율적인 디버깅을 위해 경고문 제거

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <ListProduct/> }/>
          <Route path="/write" element={ <WriteProduct/> }/>
          <Route path="/detail/:product_code" element={ <DetailProduct/> }/>
          {/* 아래 *는 그 외의 나머지 url을 입력할 경우를 의미 */}
          <Route path="*" element={ <ListProduct/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
