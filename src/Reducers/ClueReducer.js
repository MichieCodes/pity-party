import React from 'react';

const ClueReducer = (Clues, Action) => {
	switch(Action.type) {
		case "SET_CLUES":
      return Action.payload;
		default:
			return Clues;
	}
}

export default function UseClueReducer() {
	const [Clues, ClueReducerDispatch] = React.useReducer(ClueReducer, []);

	const setClues = React.useCallback((type, payload) => 
    ClueReducerDispatch({type, payload}), []);

  console.log(Clues)

	return [Clues, setClues];
}