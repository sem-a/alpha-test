import { configureStore } from '@reduxjs/toolkit';
import moviesReducer, { fetchMoviesAsync } from './moviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

store.dispatch(fetchMoviesAsync())
  .then(() => {
    // После завершения запроса можно продолжить инициализацию стора
    console.log('Данные успешно загружены из fetch запроса');
  })
  .catch((error) => {
    console.error('Ошибка при загрузке данных из fetch запроса:', error);
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;