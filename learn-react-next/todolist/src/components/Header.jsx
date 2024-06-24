import './Header.css';
import { memo } from 'react';

function Header() {
  return (
    <div className="Header">
      <h1>
        { new Date().toLocaleDateString() }
      </h1>
    </div>);
}

const OptimizedHeaderComponent = memo(Header)

export default OptimizedHeaderComponent
