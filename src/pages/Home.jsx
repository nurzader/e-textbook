import React, { useEffect, useState } from 'react';
import data from '../assets/data.json';
import Search from '../components/Search';
import DataList from '../components/DataList';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  
  const handleSearchClick = () => {
    let result = [];
    for (let i = 0; i < data.length; ++i) {
      let found = false;
      if (data[i].title.toLowerCase().includes(searchValue.toLowerCase())) {
        found = true;
      }
      for (let j = 0; j < data[i].subjects.length; ++j) {
        if (data[i].subjects[j].theme.toLowerCase().includes(searchValue.toLowerCase())) {
          found = true;
          break;
        }
      }
      if (found) {
        result.push(data[i]);
      }
    }
    setSearchResults(result);
  };
  return (
    <main className="container ml-auto mr-auto mt-[100px] py-5 flex flex-col gap-7">
      <div className="flex justify-around items-center text-neutral-800">
        <h1 className="font-bold text-3xl">
          Электронный учебник <br /> "Имитационное Моделирование"
        </h1>
        <Search
          searchValue={searchValue}
          handleInputChange={handleInputChange}
          handleSearchClick={handleSearchClick}
        />
      </div>
      <hr />
      <div className="max-w-[600px] ml-auto mr-auto">
        <ul className="flex flex-col gap-10">
          {searchResults.map((el) => (
            <DataList value={el} key={el.id} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
