import { useEffect, useState } from "react";

import fetchData from "helpers/useFetchLazy";
import {
  useInnerWidth,
  generateArrayOfPairedBoolean,
  scrollToView,
} from "utils";

import HeroBanner from "components/HeroBanner";
import CoverSection from "components/CoversSection";
import AlbumThumbnail from "components/AlbumThumbnail";
import { sortOptions } from "components/SearchForm/SelectInput";

import { ITrack } from "index.d";

const HomePage: React.FC = () => {
  const [search, setSearch] = useState<string>("Kanye West");
  const [sort, setSort] = useState<string>(sortOptions[3].value);
  const innerWidth = useInnerWidth();
  const [firstFetch, setFirstFetch] = useState<boolean>(true);

  const { fetchInfo, data: tracks } = fetchData<ITrack[]>(
    `https://api.deezer.com/search?q=${search}&order=${sort}&limit=14`
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      search: { value: string };
      sort: { value: string };
    };
    setSearch(target.search.value);
    setSort(target.sort.value);
  };

  useEffect(() => {
    if (search && sort) {
      fetchInfo();
      // Does not scroll to results on first load
      if (firstFetch) {
        setFirstFetch(false);
      } else {
        scrollToView("coverSection");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, sort]);

  return (
    <main>
      <HeroBanner handleSubmit={handleSubmit} />
      {tracks && (
        <CoverSection>
          {tracks.map((track, index) => (
            <AlbumThumbnail
              key={index}
              track={track}
              isCoverReversed={
                innerWidth > 1200
                  ? generateArrayOfPairedBoolean(14)[index]
                  : index % 2 === 0
              }
            />
          ))}
        </CoverSection>
      )}
    </main>
  );
};

export default HomePage;
