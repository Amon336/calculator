import {useReducer} from 'react'
import DigitButton from './digitbutton'
import OperationButton from './operationbutton'
import './style.css'


export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  CHOOSE_OPERATION: 'choose-operation',
  EVALUATE: 'evaluate'
}

function reducer(state , {type , payload}) {
  switch(type) {
    case ACTIONS.ADD_DIGIT: 
    if(payload.digit === '0' && state.currentOperant === '0') return state
    if(payload.digit === '.' && state.currentOperant.includes('.')) return state
     {
      ...state,
      currentOperant: `${currentOperant}${payload.digit}`
    }
  }
}

function Calc() {
  const [{currentOperant, previousOperant, operation} , dispatch] = useReducer(reducer, {})
  dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit: 1}})

  return(
    <div className="calculatorGrid">
      <div className="output">
        <div className="previousOperant">{previousOperant} {operation}</div>
        <div className="currentOperant">{currentOperant}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <OperationButton operation = '/' dispatch = {dispatch}/>
      <OperationButton operation = '+' dispatch = {dispatch}/>
      <OperationButton operation = '*' dispatch = {dispatch}/>
      <OperationButton operation = '-' dispatch = {dispatch}/>
      <DigitButton digit = '1' dispatch = {dispatch}/>
      <DigitButton digit = '2' dispatch = {dispatch}/>
      <DigitButton digit = '3' dispatch = {dispatch}/>
      <DigitButton digit = '4' dispatch = {dispatch}/>
      <DigitButton digit = '5' dispatch = {dispatch}/>
      <DigitButton digit = '6' dispatch = {dispatch}/>
      <DigitButton digit = '7' dispatch = {dispatch}/>
      <DigitButton digit = '8' dispatch = {dispatch}/>
      <DigitButton digit = '9' dispatch = {dispatch}/>
      <DigitButton digit = '0' dispatch = {dispatch}/>
      <DigitButton digit = '.' dispatch = {dispatch}/>
      <button className="span-two">=</button>
    </div>
  )
}