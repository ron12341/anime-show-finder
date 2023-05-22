import { AnimeInfoModel } from '../../Models/AnimeInfoModel';
import AnimeListItem from '../AnimeListItem/AnimeListItem';
import ListItemSummary from '../ListItemSummary/ListItemSummary';

interface AnimeListProps {
  animeList: AnimeInfoModel[];
  onSearchAnime: (info: AnimeInfoModel) => void;
}

function AnimeList({ animeList, onSearchAnime }: AnimeListProps) {
  return (
    <>
      <div
        id="list-container"
        className="grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 min-[480px]:grid-cols-3 grid-cols-2 gap-3"
      >
        {animeList.map((item: AnimeInfoModel) => {
          return (
            <>
              <div
                id="item-container"
                className="relative group cursor-pointer"
                onClick={() => {
                  onSearchAnime(item);
                }}
              >
                <AnimeListItem anime={item} />

                <div
                  id="summary-container"
                  className="absolute invisible lg:group-hover:visible top-0 left-0 h-full w-full"
                >
                  <ListItemSummary anime={item} />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default AnimeList;
