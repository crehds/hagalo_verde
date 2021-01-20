import React, { createContext, useContext, useReducer } from 'react';
const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'left':
      if (state.content === 1) return { ...state, content: 4 };
      return {
        ...state,
        content: state.content - 1,
      };
    case 'right':
      if (state.content === 4) return { ...state, content: 1 };
      return {
        ...state,
        content: state.content + 1,
      };
    default:
      return state;
  }
};

export const Provider = ({ children }) => (
  <Context.Provider value={useReducer(reducer, { content: 1 })}>
    {children}
  </Context.Provider>
);

export const useStateValue = () => useContext(Context);
