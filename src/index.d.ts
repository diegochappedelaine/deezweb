export enum ExplicitContentCoverEnum {
  Not_Explicit,
  Explicit,
  Unknown,
  Edited,
  Partially_Explicit_Lyrics_Only,
  Partially_Unknown,
  No_Advice_Avaible,
  Partially_No_Advice_Available,
}

export interface IGenre {
  id: number;
  name: string;
  picture: string;
  type: string;
}

export interface IArtist {
  id: number;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  nb_fan: number;
  radio: boolean;
  tracklist: string;
}

export interface IAlbum {
  id: number;
  title: string;
  upc: string;
  link: string;
  share: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5: string;
  genre_id: number;
  genres: IGenre[];
  label: string;
  nb_tracks: number;
  duration: number;
  fans: number;
  rating: number;
  release_date: string;
  record_type: "album" | string;
  avaible: boolean;
  tracklist: string;
  explicit_lyrics: boolean;
  explicit_content_lyrics: ExplicitContentCoverEnum;
  explicit_content_cover: ExplicitContentCoverEnum;
  contributors: IArtist[];
  artist: IArtist;
}

export interface ITrack {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  unseen: boolean;
  isrc: string;
  link: string;
  share: string;
  duration: number;
  track_position: number;
  disk_number: number;
  rank: number;
  release_date: string;
  explicit_lyrics: boolean;
  explicit_content_lyrics: ExplicitContentCoverEnum;
  explicit_content_cover: ExplicitContentCoverEnum;
  preview: string;
  bpm: number;
  gain: number;
  avaible_countries: string[];
  alternative?: string;
  md5_image: string;
  artist: IArtist;
  album: IAlbum;
  type: "track";
}
