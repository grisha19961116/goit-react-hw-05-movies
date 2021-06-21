import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Loader from './components/Loader/Loader';
import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() =>
  import('./components/Home/Home' /* webpackChunkName: "HomePage" */),
);
const LibraryPage = lazy(() =>
  import('./components/Library/Library' /* webpackChunkName: "LibraryPage" */),
);
const QueueWatched = lazy(() =>
  import(
    './components/Library/QueueWatched/QueueWatched' /* webpackChunkName: "QueueWatched" */
  ),
);
const MoviesPage = lazy(() =>
  import('./components/Movies/Movies' /* webpackChunkName: "MoviesPage" */),
);
const DetailPge = lazy(() =>
  import('./components/Detail/Detail' /* webpackChunkName: "DetailPage" */),
);
const DetailCast = lazy(() =>
  import('./components/Cast/Cast' /* webpackChunkName: "DetailCast" */),
);
const DetailReview = lazy(() =>
  import('./components/Review/Review' /* webpackChunkName: "DetailReview" */),
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navigation />
            <HomePage />
          </Route>
          <Route path="/library">
            <LibraryPage />
            <Route exact path="/library/queue">
              <QueueWatched flag="queue" />
            </Route>
            <Route exact path="/library/watched">
              <QueueWatched flag="watched" />
            </Route>
          </Route>
          <Route exact path="/movies">
            <Navigation />
            <MoviesPage />
          </Route>
          <Route path="/movies/:id">
            <DetailPge />
            <Route exact path="/movies/:id/cast">
              <DetailCast />
            </Route>
            <Route exact path="/movies/:id/review">
              <DetailReview />
            </Route>
          </Route>
        </Switch>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
