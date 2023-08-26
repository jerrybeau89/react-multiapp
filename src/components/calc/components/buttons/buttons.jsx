import React, { useState } from 'react';
import '../../assets/styles.css';
import Draggable from 'react-draggable';
// import Calculate from '../calculate.jsx/calculate';

const Buttons = () => {
  const [calculate, setCalculate] = useState('');
  const [result, setResult] = useState('');

  const operators = ['/', '*', '+', '-', '.'];
  const updateCalc = value => {
    if ((operators.includes(value) && calculate === '' )|| 
    (operators.includes(value) && operators.includes(calculate.slice(-1)))) {
      return;
    }
    setCalculate(calculate + value);

    if (!operators.includes(value)) {
      setResult(eval(calculate + value).toString());
    }
  }

  const equals = () => {
     if (calculate === "") {
      return;
    }
    setCalculate(eval(calculate).toString());
  }

  const deleteLast = () => {
    if (calculate === "") {
      return;
    }
    const value = calculate.slice(0, -1);
    setCalculate(value);
  }

  const clearAll = () => {
   if (calculate === "") {
      return;
    }
    setCalculate('');
  }
  
  return(
    <Draggable>
      <div id="calcDiv">
        <div className="btnContainer" id="calcBtnHeader">
          <div id="calcDisplay">{result ? <span>({result})</span> : ''} &nbsp; {calculate || "0"}</div>
            <div className="calcBtns">  
              <button className="calcBtn top-left" onClick={clearAll}  id ="clear">AC</button>
              <button className="calcBtn top" onClick={() => updateCalc('/')} >/</button>
              <button className="calcBtn top" onClick={() => updateCalc('*')} >*</button>
              <button className="calcBtn top-right" onClick={deleteLast}  id ="delete">&larr;</button>
              <button className="calcBtn left" onClick={() => updateCalc('7')} >7</button>
              <button className="calcBtn center" onClick={() => updateCalc('8')} >8</button>
              <button className="calcBtn center" onClick={() => updateCalc('9')} >9</button>
              <button className="calcBtn right" onClick={() => updateCalc('-')} >-</button>
              <button className="calcBtn left" onClick={() => updateCalc('4')} >4</button>
              <button className="calcBtn center" onClick={() => updateCalc('5')} >5</button>
              <button className="calcBtn center" onClick={() => updateCalc('6')} >6</button>
              <button className="calcBtn right" onClick={() => updateCalc('+')} >+</button>
              <button className="calcBtn left" onClick={() => updateCalc('1')} >1</button>
              <button className="calcBtn center" onClick={() => updateCalc('2')} >2</button>
              <button className="calcBtn center" onClick={() => updateCalc('3')} >3</button>
              <button className="calcBtn right" onClick={() => updateCalc('.')} >.</button>
              <button className="calcBtn bottom-left" onClick={() => updateCalc('(')} >(</button>
              <button className="calcBtn bottom" onClick={() => updateCalc('0')} >0</button>
              <button className="calcBtn bottom" onClick={() => updateCalc(')')} >)</button>
              <button className="calcBtn bottom-right" onClick={equals}  id="equal">=</button>
            </div>
        </div>
      </div>
    </Draggable>
  )
}

export default Buttons