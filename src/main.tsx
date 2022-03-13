import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
type Product = {
  id: number,
  name : string
}

const myName : string = "Long Thanh";
const myAge:number = 20;
const myStatus:boolean = true;

const product = {
  id : 1,
  name : "Products 1"
}
function show(props : Product){
  console.log(props.name)
};
ReactDOM.render(
  <div>
    <div>{myStatus ? myName : "Oke"}</div>
    <div>My name: {myName}</div>
    <div>
      <App />
    </div>
    <div><h1> My age : {myAge}</h1></div>
  </div>,
  document.getElementById('root')
)
