import React, { useEffect } from 'react';
import { Link } from "react-scroll";

const SideBar = ({ items }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <aside className="sideBar">
      <h3 
        className="text-neutral-600 font-black text-xl mb-7">
        {items.title}
      </h3>
      <ul className="flex flex-col gap-4 text-sm font-semibold">
        {items.subjects.map((el, i) => (
          <li key={i} className='cursor-pointer'>
            <Link 
              activeClass='border-red-600 text-red-600'
              to={el.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              {el.theme}
              </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
