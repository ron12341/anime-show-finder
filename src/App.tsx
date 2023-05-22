import './App.css';
import AnimeInfo from './components/AnimeInfo/AnimeInfo';
import AnimeList from './components/AnimeList/AnimeList';
import { useFetchAnime } from './helpers/useFetchAnime';
import Navbar from './components/Navbar/Navbar';

function App() {
  let { animeInfo, handleOnSearchAnime, animeList, handleOnSearchInput } = useFetchAnime();

  return (
    <div className="min-h-screen w-screen bg-gray-900 overflow-hidden">
      <Navbar onSearchAnime={handleOnSearchAnime} onSearchInput={handleOnSearchInput} />
      <div>
        <div className="p-4 mx-auto max-w-5xl bg-gray-900">
          {animeList && <AnimeList animeList={animeList} onSearchAnime={handleOnSearchAnime} />}

          {animeInfo && <AnimeInfo anime={animeInfo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
