import React from 'react';
import UseClueReducer from '../Reducers/ClueReducer';

const ClueDataContext = React.createContext(); 
const ClueFunctionContext = React.createContext(); 

export function ClueProvider({children}) {
  const [Clues, setClues] = UseClueReducer();

  return (
    <ClueFunctionContext.Provider value={setClues}>
      <ClueDataContext.Provider value={Clues}>
        {children}
      </ClueDataContext.Provider>
    </ClueFunctionContext.Provider>
  );
}

export const UseClueDataContext = () => React.useContext(ClueDataContext);
export const UseClueFunctionContext = () => React.useContext(ClueFunctionContext);