import { useEffect, useState } from "react";

import fetchData from "helpers/fetchData";
import { useInnerWidth, generateArrayOfPairedBoolean } from "utils";

import SearchForm from "components/SearchForm/SearchForm";
import CoverSection from "components/CoversSection/CoversSection";
import AlbumThumbnail from "components/AlbumThumbnail";

import { ITrack } from "index.d";

const HomePage: React.FC = () => {
  const innerWidth = useInnerWidth();

  const [search, setSearch] = useState<null | string>(null);
  const [sort, setSort] = useState<null | string>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      search: { value: string };
      sort: { value: string };
    };

    setSearch(target.search.value);
    setSort(target.sort.value);
  };

  const {
    fetchInfo,
    data: tracks,
    loading,
  } = fetchData<ITrack[]>(
    `https://api.deezer.com/search?q=${search}&order=${sort}&limit=14`
  );

  useEffect(() => {
    if (search && sort) {
      fetchInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, sort]);

  if (loading) return null;

  return (
    <main>
      <h1>Deezweb</h1>
      <SearchForm onSubmit={handleSubmit} />
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
