// //import React, { useState } from 'react'
// import Buttons from '../buttons/buttons';

// const Calculate = ({reset, operatorType, deleteBtn, inputNum, equal}) => {
//   const calculate = function calc (){
//     const display =
//     btns.map( btn => {
//       btn.addEventListener('click', (e) => {
//         switch(e.target.innerText){
//           // case 'AC':
//           //   reset(display.innerText = '')
//           //   break;            
//           //  case '←':
//           //   if(display.innerText){
//           //     deleteBtn(display.innerText = display.innerText.slice(0, -1))}
//           //   break;         
//           // case '=':
//           //   try{
//           //     equal(display.innerText = eval(display.innerText));
//           //   } catch {
//           //     equal(display.innerText = 'Error!')
//           //   }
//           //   break;           
//           // case '+':
//           //  operatorType(display.innerText = '+')
//           //   break;           
//           // case '-':
//           //  operatorType(display.innerText = '-')
//           //   break;           
//           // case '/':
//           //  operatorType(display.innerText = '/')
//           //   break;           
//           // case '*':
//           //  operatorType(display.innerText = '*')
//           //   break;           
//           case '1':
//             inputNum(display.innerText = '1')
//             break;           
//           case '2':
//             inputNum(display.innerText = '2')
//             break;           
//           case '3':
//             inputNum(display.innerText = '3')
//             break;           
//           case '4':
//             inputNum(display.innerText = '4')
//             break;           
//           case '5':
//             inputNum(display.innerText = '5')
//             break;           
//           case '6':
//             inputNum(display.innerText = '6')
//             break;           
//           case '7':
//             inputNum(display.innerText = '7')
//             break;           
//           case '8':
//             inputNum(display.innerText = '8')
//             break;           
//           case '9':
//             inputNum(display.innerText = '9')
//             break;           
//           case '0':
//             inputNum(display.innerText = '0')
//             break;           
//           default:
//             display.innerText += e.target.innerText;
//         }
//       });
//     });
//   }
//   return calculate;
// }

// export default Calculate;

// import React, { useState } from 'react';

// function Calculator() {
//   const [calculation, setCalculation] = useState('');

//   const handleClick = (event) => {
//     const value = event.target.value;
//     setCalculation(calculation + value);
//   };

//   const handleClear = () => {
//     setCalculation('');
//   };

//   const handleCalculate = () => {
//     try {
//       const result = eval(calculation);
//       setCalculation(result.toString());
//     } catch (error) {
//       setCalculation('Error');
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={calculation} readOnly />
//       <br />
//       <button value="1" onClick={handleClick}>1</button>
//       <button value="2" onClick={handleClick}>2</button>
//       <button value="3" onClick={handleClick}>3</button>
//       <button value="+" onClick={handleClick}>+</button>
//       <br />
//       <button value="4" onClick={handleClick}>4</button>
//       <button value="5" onClick={handleClick}>5</button>
//       <button value="6" onClick={handleClick}>6</button>
//       <button value="-" onClick={handleClick}>-</button>
//       <br />
//       <button value="7" onClick={handleClick}>7</button>
//       <button value="8" onClick={handleClick}>8</button>
//       <button value="9" onClick={handleClick}>9</button>
//       <button value="*" onClick={handleClick}>*</button>
//       <br />
//       <button value="." onClick={handleClick}>.</button>
//       <button value="0" onClick={handleClick}>0</button>
//       <button onClick={handleClear}>Clear</button>
//       <button value="/" onClick={handleClick}>/</button>
//       <br />
//       <button onClick={handleCalculate}>Calculate</button>
//     </div>
//   );
// }

// export default Calculator;
