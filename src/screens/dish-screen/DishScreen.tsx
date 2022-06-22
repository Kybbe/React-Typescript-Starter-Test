import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchDB, deleteFromDB } from '../../utils/db-interactions';

import { CircleLoader } from 'react-spinners';

import { Card } from '../../components/layout/card/Card';

export const DishScreen: React.FC = () => {
  interface Dish {
    id: number;
    title: string;
    description: string;
    url: string;
  }

  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function fetchInfo(): Promise<void> {
      try {
        setDishes(await fetchDB('dishes'));
        setLoading(false);
      } catch (error) {
        alert(error);
        history.push('/error');
      }
    }

    fetchInfo();
  }, [history]);

  async function deleteCard(id: number): Promise<void> {
    try {
      await deleteFromDB("dishes", id);
      
      const newDishes = dishes.filter(dish => dish['id'] !== id);
      setDishes(newDishes);
    } catch (error) {
      alert(error);
      history.push('/error');
    }
  }

  const dishesMap = dishes.map((dish) => {
    return <Card subject={dish} key={dish.id} screen="dishes" deleteCard={deleteCard} />
  });

  return (
    <>
      { !loading ? (
        <div>
          <h1 className='headline'>Hello from dish-screen</h1>
          <div className='cardContainer'>
            {dishesMap}
          </div>
        </div>
      ) : (
        <div className='loader'><CircleLoader size={"8vw"}  /></div>
      )}
    </>
  )
}
