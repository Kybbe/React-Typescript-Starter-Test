import { Switch, Route } from 'react-router-dom';

import './App.css';
import { Header } from './components/layout/header/Header';
import { DishScreen } from './screens/dish-screen/DishScreen';
import { HomeScreen } from './screens/home-screen/HomeScreen';
import { SportsScreen } from './screens/sports-screen/SportsScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <HomeScreen />
        </Route>
        <Route exact path="/dishes">
          <DishScreen />
        </Route>
        <Route exact path="/sports">
          <SportsScreen />
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
