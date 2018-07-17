console.log('Hello World again')

const values = {a: 1, b: 2, c: 3}

const newValues = {
  ...values,
  d: 4,
}

console.log(newValues)

// import React from 'react'
// import ReactDom from 'react-dom'
//
// function Person (props) {
//   return (
//     <div>
//       <h1>hi {props.name}</h1>
//       <h3>Age: {props.age}</h3>
//     </div>
//   )
// }
//
// const app = (
//   <div>
//     <Person name='Andrew' age='37'/>
//     <Person name='Amanda' age='32'/>
//   </div>
// )
//
// ReactDom.render(app,
//   document.getElementById('app')
// )


import React from 'react';
import { render } from 'react-dom';
// import Demo from './components/card.js';
import Form from './components/form.js';

const rootElement = document.querySelector('#app');
if (rootElement) {
  // render(<Demo />, rootElement);
  render(<Form />, rootElement);
}