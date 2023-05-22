import { ChangeEvent, useEffect, useState } from 'react';
import { AnimeInfoModel } from '../../Models/AnimeInfoModel';
import OptionBox from './OptionBox';

interface Props {
  onSearchAnime: (anime: AnimeInfoModel) => void;
  onSearchInput: (input: string) => void;
}

function SearchBar({ onSearchAnime, onSearchInput }: Props) {
  const [search, setSearch] = useState<string>('');
  const [query, setQuery] = useState<string>('');

  const debounceOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => setSearch(query), 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  const handleSelectOption = (animeInfo: AnimeInfoModel) => {
    setQuery('');
    onSearchAnime(animeInfo);
  };

  const handleOnSearchInput = () => {
    onSearchInput(query);
    setQuery('');
  };

  document.addEventListener('keyup', event => {
    if (event.key === 'Escape') setSearch('');
  });

  return (
    <>
      <div id="searchBar-container" className="flex-col relative w-full h-full z-20">
        <div
          className="flex rounded-full bg-indigo-700 text-white h-full items-center"
        >
          <input
            className="flex flex-auto h-full my-3 ml-5 bg-transparent outline-none"
            type="text"
            autoCorrect='false'
            placeholder="Search"
            value={query}
            onChange={debounceOnChange}
            onKeyUp={event => {
              if (event.key === 'Enter') handleOnSearchInput();
            }}
          />
          <button id="search-btn" className="mx-3 w-1/8" onClick={handleOnSearchInput}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.7em"
              width="1.7em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path>
            </svg>
          </button>
        </div>
        <div id="option-container" className="absolute top-full w-full mt-1">
          <OptionBox search={search} selectOption={handleSelectOption} />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
