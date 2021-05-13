import { Switch, Route, useLocation } from "react-router-dom";

import {
  HomePage,
  AlbumPage,
  ArtistPage,
  TrackPage,
  NotFoundPage,
  FavoritesPage,
} from "pages";
import "styles/App.scss";

const App = () => {
  const location = useLocation();

  return (
    <Switch location={location} key={location.pathname}>
      <Route path="/favorites" component={FavoritesPage} exact />
      <Route path="/artist/:id" component={ArtistPage} exact />
      <Route path="/album/:id" component={AlbumPage} exact />
      <Route path="/track/:id" component={TrackPage} exact />
      <Route path="/404" component={NotFoundPage} exact />
      <Route path="/" component={HomePage} exact />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
