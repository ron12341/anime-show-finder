import { AnimeInfoModel } from '../../Models/AnimeInfoModel';
import SearchBar from '../Search/SearchBar';

interface Props {
  onSearchInput: (input: string) => void;
  onSearchAnime: (anime: AnimeInfoModel) => void;
}

function Navbar({ onSearchAnime, onSearchInput }: Props) {
  return (
    <>
      <nav className=" bg-black">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
          <div className="w-3/4 max-[450px]:hidden mx-auto">
            <SearchBar onSearchInput={onSearchInput} onSearchAnime={onSearchAnime} />
          </div>

          <div className="rounded-full overflow-hidden min-[450px]:hidden">
            <button
              id="search-btn"
              className="bg-indigo-700 p-2"
              onClick={() => {
                const searchbar = document.getElementById('hidden-searchbar');
                if (searchbar?.classList.contains('hidden')) searchbar.classList.remove('hidden');
                else searchbar?.classList.add('hidden');
              }}
            >
              <svg
                stroke="currentColor"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1.8em"
                width="1.8em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden min-[450px]:hidden absolute w-full h-12" id="hidden-searchbar">
          <SearchBar onSearchInput={onSearchInput} onSearchAnime={onSearchAnime} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
