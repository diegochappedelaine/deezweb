import { useEffect, useState } from "react";
import styled from "styled-components";

import fetchData from "helpers/useFetchLazy";
import {
  useInnerWidth,
  generateArrayOfPairedBoolean,
  scrollToView,
} from "utils";

import SearchForm from "components/SearchForm/SearchForm";
import CoverSection from "components/CoversSection";
import AlbumThumbnail from "components/AlbumThumbnail";
import { sortOptions } from "components/SearchForm/SelectInput";

import { ITrack } from "index.d";

const HeroBanner = styled.header`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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
      <HeroBanner>
        <h1>Deezweb</h1>
        <SearchForm onSubmit={handleSubmit} />
      </HeroBanner>
      {tracks && (
        <CoverSection>
          {tracks.map((track, index) => (
            <AlbumThumbnail
              key={index}
              track={track}
              isCoverReversed={
                innerWidth > 1200
                  ? generateArrayOfPairedBoolean(tracks.length)[index]
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
