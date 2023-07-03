import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/data.json';
import SideBar from '../components/SideBar';

const InnerPage = () => {
  const { id } = useParams();

  let items = data.find((user) => user.id === id);

  return (
    <div className="flex justify-center h-screen mt-[76px]">
      <SideBar items={items} />

      <div className="flex flex-col gap-10 py-9 max-w-[700px] ml-[200px]">
        <ul className="flex flex-col gap-10">
          {items.subjects.map((el, i) => (
            <li key={i} id={el.path}>
              <p className="font-semibold text-3xl mb-4">{el.theme}</p>
              {el.paragraphs.map((el, i) => (
                <p key={i} className="mb-5">
                  {el}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InnerPage;
