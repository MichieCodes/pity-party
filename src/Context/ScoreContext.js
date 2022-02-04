import React from 'react';
import UseScoreReducer from '../Reducers/ScoreReducer';

const ScoreDataContext = React.createContext(); 
const ScoreFunctionContext = React.createContext(); 

export function ScoreProvider({children}) {
  const [{Score, GameOver}, setScore] = UseScoreReducer();

  return (
    <ScoreFunctionContext.Provider value={setScore}>
      <ScoreDataContext.Provider value={{Score, GameOver}}>
        {children}
      </ScoreDataContext.Provider>
    </ScoreFunctionContext.Provider>
  );
}

export const UseScoreDataContext = () => React.useContext(ScoreDataContext);
export const UseScoreFunctionContext = () => React.useContext(ScoreFunctionContext);