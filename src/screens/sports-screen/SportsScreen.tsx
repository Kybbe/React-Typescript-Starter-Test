import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchDB, deleteFromDB } from '../../utils/db-interactions';

import { CircleLoader } from 'react-spinners';

import { Card } from '../../components/layout/card/Card';

export const SportsScreen: React.FC = () => {
  interface Sport {
    id: number;
    title: string;
    description: string;
    url: string;
  }

  const [sports, setSports] = useState<Sport[]>([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    
    async function fetchInfo(): Promise<void> {
      try {
        setSports(await fetchDB('sports'));
        setLoading(false)
      } catch (error) {
        alert(error);
        history.push('/error');
      }
    }

    fetchInfo();

  }, [history]);

  async function deleteCard(id: number): Promise<void> {
    try {
      await deleteFromDB("sports", id);
      
      const newSports = sports.filter(sport => sport['id'] !== id);
      setSports(newSports);
    } catch (error) {
      alert(error);
      history.push('/error');
    }
  }

  const sportsMap = sports.map((sport) => {
    return <Card subject={sport} key={sport.id} screen="sports" deleteCard={deleteCard} />
  });
  
  return (
    <>
      { !loading ? (
        <div>
          <h1 className='headline'>Hello from sports-screen</h1>
          <div className='cardContainer'>
            {sportsMap}
          </div>
        </div>
      ): (
        <div className='loader'><CircleLoader size={"8vw"}  /></div>
      )}
    </>
  )
}
