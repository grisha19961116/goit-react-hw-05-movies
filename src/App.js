import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Loader from './components/Loader/Loader.jsx';
import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() =>
  import('./components/Home/Home' /* webpackChunkName: "HomePage" */),
);
const LibraryPage = lazy(() =>
  import('./components/Library/Library' /* webpackChunkName: "LibraryPage" */),
);
const MoviesPage = lazy(() =>
  import('./components/Movies/Movies' /* webpackChunkName: "MoviesPage" */),
);
const DetailPge = lazy(() =>
  import('./components/Detail/Detail' /* webpackChunkName: "DetailPage" */),
);
const DetailCast = lazy(() =>
  import('./components/Cast/Cast.jsx' /* webpackChunkName: "DetailCast" */),
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
          <Route exact path="/library">
            <Navigation />
            <LibraryPage />
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
