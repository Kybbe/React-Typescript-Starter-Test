import React from 'react'
import { Card } from '../../components/layout/card/Card';

interface Props {
  dishes: Array<any>,
  deleteCard: Function,
}

export const DishScreen: React.FC<Props> = (props) => {
  let dishesMap = props.dishes.map((dish) => {
    return <Card subject={dish} key={dish.id} screen="dishes" deleteCard={props.deleteCard} />
  });

  return (
    <div>
      <h1 className='headline'>Hello from dish-screen</h1>
      <div className='cardContainer'>
        {dishesMap}
      </div>
    </div>
  )
}
