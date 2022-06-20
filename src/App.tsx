import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';

import './App.css';
import { Header } from './components/layout/header/Header';
import { DishScreen } from './screens/dish-screen/DishScreen';
import { HomeScreen } from './screens/home-screen/HomeScreen';
import { SportsScreen } from './screens/sports-screen/SportsScreen';

import { fetchDB, deleteFromDB } from './utils/db-interactions';

function App() {
  const [dishes, setDishes] = useState([]);
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function fetchInfo() {
      try {
        setDishes(await fetchDB('dishes'));
        setSports(await fetchDB('sports'));
        setLoading(false);
      } catch (error) {
        alert(error);
        history.push('/error');
      }
    }

    fetchInfo();
  }, []);

  async function deleteCard(id: number, screen: string) {
    try {
      await deleteFromDB(screen, id);
      
      if (screen === 'dishes') {
        let newDishes = dishes.filter(dish => dish['id'] !== id);
        setDishes(newDishes);
      } else if (screen === 'sports') {
        let newSports = sports.filter(sport => sport['id'] !== id);
        setSports(newSports);
      }
    } catch (error) {
      alert(error);
      history.push('/error');
    }
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <HomeScreen />
        </Route>
        <Route exact path="/dishes">
          {loading ? <div className='loader'><CircleLoader size={"8vw"} /></div> : <DishScreen dishes={dishes} deleteCard={deleteCard} />}
        </Route>
        <Route exact path="/sports">
          {loading ? <div className='loader'><CircleLoader size={"8vw"}  /></div> : <SportsScreen sports={sports} deleteCard={deleteCard} />}
        </Route>
        <Route exact path="/error">
          <h1 style={{textAlign: "center"}}>Oops, something went <strong style={{color: "red"}}>wrong</strong>!</h1>
          <h3 style={{textAlign: "center"}}>Please try again later.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
