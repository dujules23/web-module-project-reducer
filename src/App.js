import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer, { initialState } from './reducers/index'

import { addOne, applyNumber, changeOperation, clearDisplay, addToMemory, combineMemory} from './actions/index'


function App() {
  // Imported useReducer hook to get access to state
  const [state, dispatch] = useReducer(reducer, initialState)

  // console.log(state)

  const handleAdd = (number) =>{
    dispatch(applyNumber(number))
  };

  const handleOperation = (operator) => {
    dispatch(changeOperation(operator))
  };

  const handleClear = () => {
    dispatch(clearDisplay())
  };

  const handleMemory = (memory) => {
    dispatch(addToMemory(memory))
  }

  const applyMemory = (number) => {
    dispatch(combineMemory(number))
  }
  
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => handleMemory(state.memory)}/>
              <CalcButton value={"MR"} onClick={() => applyMemory()}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleAdd(1)}/>
              <CalcButton value={2} onClick={() => handleAdd(2)}/>
              <CalcButton value={3} onClick={() => handleAdd(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleAdd(4)}/>
              <CalcButton value={5} onClick={() => handleAdd(5)}/>
              <CalcButton value={6} onClick={() => handleAdd(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleAdd(7)}/>
              <CalcButton value={8} onClick={() => handleAdd(8)}/>
              <CalcButton value={9} onClick={() => handleAdd(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperation("+")}/>
              <CalcButton value={"*"} onClick={() => handleOperation("*")}/>
              <CalcButton value={"-"} onClick={() => handleOperation("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClear()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
