import React from 'react';
import { ScoreProvider } from './Context/ScoreContext';
import { ClueProvider } from './Context/ClueContext';

import FetchScreen from './Screens/FetchScreen';
import CategoryScreen from './Screens/CategoryScreen';
import GameScreen from './Screens/GameScreen';

import './App.scss';

const Screens = {FETCH: 0, CATEGORY: 1, GAME: 2};

function App() {
  const [activeScreen, setactiveScreen] = React.useState(Screens.FETCH);

  return (
    <ClueProvider>
      <ScoreProvider>
        <div className="App">
          {activeScreen === Screens.FETCH && 
            <FetchScreen next={() => setactiveScreen(Screens.CATEGORY)}/>}
          {activeScreen === Screens.CATEGORY && 
            <CategoryScreen next={() => setactiveScreen(Screens.GAME)}/>}
          {activeScreen === Screens.GAME && 
            <GameScreen next={() => setactiveScreen(Screens.FETCH)}/>}
        </div>
      </ScoreProvider>
    </ClueProvider>
  );
}

export default App;
