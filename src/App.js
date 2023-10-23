import './App.css';
import { useReducer } from 'react';
import { reducer } from './reducer/reducer';


function App() {
  const initialState = 0
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <button onClick={() => dispatch({ type: 'inc' })}>inc</button>
      <span>{state}</span>
      <button onClick={() => dispatch({ type: 'dec' })}>dec</button>
    </>
  );
}

export default App;
