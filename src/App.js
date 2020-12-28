import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

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
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <AsyncComponentHomePage />
          </Route>
          <Route exact path="/movies">
            <AsyncComponentMoviesPage />
          </Route>
        </Switch>

        <Route exact path="/movies/:id">
          <AsyncComponentDetailsMovie />
        </Route>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
