import React from 'react'
import { Card } from '../../components/layout/card/Card';

interface Props {
  sports: Array<any>,
  deleteCard: Function,
}

export const SportsScreen: React.FC<Props> = (props) => {
  let sportsMap = props.sports.map((sport) => {
    return <Card subject={sport} key={sport.id} screen="sports" deleteCard={props.deleteCard} />
  });
  
  return (
    <div>
      <h1 className='headline'>Hello from sports-screen</h1>
      <div className='cardContainer'>
        {sportsMap}
      </div>
    </div>
  )
}
