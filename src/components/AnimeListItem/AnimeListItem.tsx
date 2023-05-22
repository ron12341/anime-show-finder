import './ListItem.css';
import { AnimeInfoModel } from '../../Models/AnimeInfoModel';
import ListItemSummary from '../ListItemSummary/ListItemSummary';

interface Props {
  anime: AnimeInfoModel;
}

function AnimeListItem({ anime }: Props) {
  return (
    <>
      <div className="flex-col text-neutral-300">
        <div className="flex-none">
          <img
            className="w-full h-full rounded-lg mb-2"
            src={`${anime.attributes.posterImage.large}`}
            alt="Image"
          />
        </div>

        <div id="item-title">
          <p className="w-10/12 text-center text-sm mx-auto">{`${anime.attributes.canonicalTitle}`}</p>
        </div>
      </div>
    </>
  );
}

export default AnimeListItem;
