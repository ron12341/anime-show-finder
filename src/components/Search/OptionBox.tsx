import { useEffect, useState } from 'react';
import { formatDate, formatTime, formatShowType } from '../../helpers/FormatInformation';
import { AnimeInfoModel } from '../../Models/AnimeInfoModel';

const BASE_URL = 'https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0&filter[text]=';

interface Props {
  search: string;
  selectOption: (animeInfo: AnimeInfoModel) => void;
}

function OptionBox({ search, selectOption }: Props) {
  const [options, setOptions] = useState<AnimeInfoModel[] | null>(null);

  useEffect(() => {
    if (search === '') {
      setOptions(null);
      return;
    }

    search = search.replaceAll(' ', '%20');
    fetch(`${BASE_URL}${search}`)
      .then(res => res.json())
      .then(data => setOptions(data.data));
  }, [search]);

  return (
    <>
      {options?.length && (
        <ul className="bg-neutral-900 rounded-lg shadow-lg" role="list">
          <>
            {options.map((option: AnimeInfoModel, index) => {
              const tiny_img = option.attributes.posterImage.tiny;
              const title = option.attributes.canonicalTitle;
              const startDate = option.attributes.startDate;
              const showType = option.attributes.showType;
              const episodeLength = option.attributes.episodeLength;

              return (
                <li
                  key={index}
                  className="odd:bg-neutral-800 hover:bg-neutral-700 group/item p-3 first:rounded-t-lg last:rounded-b-lg group"
                  role="button"
                  onClick={() => {
                    selectOption(option);
                  }}
                >
                  <div className="flex align-middle">
                    <div className="flex flex-none w-8 mr-3">
                      <img className="self-center" src={tiny_img} />
                    </div>
                    <div className="flex justify-start flex-col">
                      <p className="text-neutral-400 text-sm mb-1 font-medium">{title}</p>
                      <div className="group-hover:text-white text-gray-500 text-xs flex">
                        <p className="mr-3">{formatDate(startDate)}</p>
                        <p className="mr-3">{formatShowType(showType)}</p>
                        <p>{formatTime(episodeLength)}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </>
        </ul>
      )}
    </>
  );
}

export default OptionBox;
