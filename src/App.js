import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';

const AsyncComponentHomePage = lazy(() =>
  import('./components/HomePage/HomePage' /* webpackChunkName: "HomePage" */),
);
const AsyncComponentMoviesPage = lazy(() =>
  import(
    './components/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */
  ),
);
const AsyncComponentDetailsMovie = lazy(() =>
  import(
    './components/DetailsMovie/DetailsMovie' /* webpackChunkName: "DetailsMovie" */
  ),
);

function App() {
  const [url, setUrl] = useState('');

  const handleUrl = url => {
    setUrl(url);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <AsyncComponentHomePage handleUrl={handleUrl} />
          </Route>
          <Route exact path="/movies">
            <AsyncComponentMoviesPage handleUrl={handleUrl} />
          </Route>
          <Route
            exact
            path="/movies/:id"
            render={props => (
              <AsyncComponentDetailsMovie {...props} lastUrl={url} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
