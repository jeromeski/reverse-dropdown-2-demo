import { useEffect, useRef, useState } from 'react';
import './styles.css';
import { TimelineLite } from 'gsap';

export default function App() {
  let el = useRef(null);

  const [timeline] = useState(new TimelineLite());

  useEffect(() => {
    initSubMenu()

  },[]);


  const initSubMenu = () => {
    timeline.to(el.current, { opacity: 0, y: 25})
  };


  const showSubMenu = (e) => {
    timeline.to(el.current, { opacity: 1, y: 0 });
  };

  const hideSubMenu = () => {
  
    initSubMenu()
  }

  return (
    <div className="App">
      <div className="nav">
        <a
          className="main-link"
          onMouseEnter={showSubMenu}
          
        >
          MainLink
        </a>
        <div ref={el} className="sub-menu" onMouseLeave={hideSubMenu}>
          <a className="sub-link" href="#">
            SubLink 1
          </a>
          <a className="sub-link" href="#">
            SubLink 2
          </a>
          <a className="sub-link" href="#">
            SubLink 3
          </a>
        </div>
      </div>
    </div>
  );
}
