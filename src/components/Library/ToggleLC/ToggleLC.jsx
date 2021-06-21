import { useEffect, useState } from 'react';

import s from './ToggleLC.module.css';

const toggleToQueue = movie => {
  const queue = document.getElementById('queue');
  queue.classList.toggle(s.queue_watched_btn_add);
  queue.classList.toggle(s.queue_watched_btn_delete);
  let film = JSON.parse(localStorage.getItem('queue')) || [];
  if (film.find(el => el.id === movie.id)) {
    film = film.filter(el => el.id !== movie.id);
    queue.textContent = 'Add to queue';
  } else {
    film.push(movie);
    queue.textContent = 'Delete from queue';
  }
  localStorage.setItem('queue', JSON.stringify(film));
};

const toggleToWatched = movie => {
  const watched = document.getElementById('watched');
  watched.classList.toggle(s.queue_watched_btn_add);
  watched.classList.toggle(s.queue_watched_btn_delete);
  let film = JSON.parse(localStorage.getItem('watched')) || [];
  if (film.find(el => el.id === movie.id)) {
    film = film.filter(el => el.id !== movie.id);
    watched.textContent = 'Add to watched';
  } else {
    film.push(movie);
    watched.textContent = 'Delete from watched';
  }
  localStorage.setItem('watched', JSON.stringify(film));
};

const ToggleLC = ({ movie }) => {
  const [isQueue, setIsQueue] = useState(null);
  const [isWatched, setIsWatched] = useState(null);

  useEffect(() => {
    const queue = localStorage.getItem('queue');
    if (queue !== null && queue.length > 0)
      JSON.parse(queue).filter(el => {
        if (el.id === movie.id) setIsQueue(true);
      });
    const watched = localStorage.getItem('watched');
    if (watched !== null && watched.length > 0)
      JSON.parse(watched).filter(el => {
        if (el.id === movie.id) setIsWatched(true);
      });
  }, [movie.id]);

  return (
    <div className={s.queue_watched_wrapper}>
      <button
        id="queue"
        onClick={() => toggleToQueue(movie)}
        className={
          isQueue ? s.queue_watched_btn_delete : s.queue_watched_btn_add
        }
      >
        {isQueue ? 'Delete from queue' : 'Add to queue'}
      </button>
      <button
        id="watched"
        onClick={() => toggleToWatched(movie)}
        className={
          isWatched ? s.queue_watched_btn_delete : s.queue_watched_btn_add
        }
      >
        {isWatched ? 'Delete from watched' : 'Add to watched'}
      </button>
    </div>
  );
};

export default ToggleLC;
