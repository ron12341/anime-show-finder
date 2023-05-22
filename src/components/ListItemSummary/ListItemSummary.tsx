import './SummaryStyle.css';
import { AnimeInfoModel } from '../../Models/AnimeInfoModel';
import { formatDate } from '../../helpers/FormatInformation';

interface Props {
  anime: AnimeInfoModel;
}

function ListItemSummary({ anime }: Props) {
  return (
    <div className="relative p-2 bg-neutral-900 text-neutral-300 z-10 font-sans rounded-lg border-black h-full w-full bg-opacity-95 shadow-xl">
      <div id="summary-title" className="mb-3">
        <p className="inline text-md font-semibold text-white">{anime.attributes.canonicalTitle}</p>
      </div>

      <div id="summary-desc" className="mb-3">
        <p className="text-xs font-medium">{anime.attributes.description}</p>
      </div>

      <div id="summary-meta" className="flex-col text-xs font-medium">
        
        <p>
          Score:
          <span className="ml-2 text-neutral-400">{`${anime.attributes.averageRating}`}</span>
        </p>
        <p>
          Date aired:
          <span className="ml-2 text-neutral-400 inline">
            {`${formatDate(anime.attributes.startDate)} to ${
              formatDate(anime.attributes.endDate) || '?'
            }`}
          </span>
        </p>
        <p>
          Status:
          <span className="ml-2 text-neutral-400">
            {`${anime.attributes.status === 'finished' ? 'Finished Airing' : 'Currently Airing'}`}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ListItemSummary;
