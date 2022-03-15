import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import MyApp from './conponents/myApp'
import { BrowserRouter } from 'react-router-dom'
// type Product = {
//   id: number,
//   name : string
// }

// const myName : string = "Long Thanh";
// const myAge:number = 20;
// const myStatus:boolean = true;

// const product = {
//   id : 1,
//   name : "Products 1"
// }
// function show(props : Product){
//   console.log(props.name)
// };
// function Show(props : {data : Product}) : any{
//     return (
//       <div>
//         <p>{props.data.name}</p>
//       </div>
//     );
// }
ReactDOM.render(
  <BrowserRouter><App/></BrowserRouter>,
  document.getElementById('root')
)
