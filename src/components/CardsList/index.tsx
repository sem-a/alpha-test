import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCards } from '../../store/cardsSlice';
import { RootState, AppDispatch } from '../../store/store';
import Card from '../Card';
import styles from './index.module.scss';

const CardList: React.FC = () => {
  const cards = useSelector((state: RootState) => state.cards.cards);
  const dispatch = useDispatch<AppDispatch>();
  const [visibleCards, setVisibleCards] = useState(8);
  const cardsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
      dispatch(setCards(data));
    };

    fetchData();
  }, [dispatch]);

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 8);
  };

  return (
    <div>
      <div className={styles.cardList}>
        {cards.slice(0, visibleCards).map((card) => (
          <Card key={card.id} id={card.id} title={card.title} url={card.url} likes={card.likes} />
        ))}
      </div>
      {visibleCards < cards.length && (
        <div className={styles.showMore}>
          <button onClick={showMoreCards}>Показать еще</button>
        </div>
      )}
    </div>
  );
};

export default CardList;