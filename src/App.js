// jservice.io
import React from 'react';
import { ScoreProvider } from './Context/ScoreContext';

import FetchScreen from './Screens/FetchScreen';
import CategoryScreen from './Screens/CategoryScreen';
import GameScreen from './Screens/GameScreen';

import './App.scss';
import { ClueProvider } from './Context/ClueContext';

const Screens = {FETCH: 0, CATEGORY: 1, GAME: 2};

function App() {
  const [activeScreen, setactiveScreen] = React.useState(Screens.FETCH);

  return (
    <ScoreProvider>
      <ClueProvider>
        <div className="App">
          {activeScreen === Screens.FETCH && 
            <FetchScreen next={() => setactiveScreen(Screens.CATEGORY)}/>}
          {activeScreen === Screens.CATEGORY && 
            <CategoryScreen next={() => setactiveScreen(Screens.GAME)}/>}
          {activeScreen === Screens.GAME && 
            <GameScreen next={() => setactiveScreen(Screens.FETCH)}/>}
        </div>
      </ClueProvider>
    </ScoreProvider>
  );
}

export default App;
