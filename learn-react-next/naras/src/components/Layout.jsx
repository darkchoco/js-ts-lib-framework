import style from './Layout.module.css';

// 페이지 별로 달라지는 부분을 제외하고 전체적으로 모든 페이지에 적용되는 스타일이 있다면 이 Layout 컴포넌트에
// 적용해주면 된다.
// 본 프로젝트에서는 페이지의 헤더 부분이 이에 해당한다.
export default function Layout({ children }) {
  return <div>
    <header className={ style.header }>
      <div>🌍 NARAS</div>
    </header>
    <main className={ style.main }>{ children }</main>
  </div>;
}
