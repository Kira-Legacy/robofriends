import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from "./Card";
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { Robots } from "./Robots";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Card id={Robots[0].id} 
      name={Robots[0].name} 
      username={Robots[0].username}  
      email={Robots[0].email} />

      <Card id={Robots[1].id} 
      name={Robots[1].name} 
      username={Robots[1].username}  
      email={Robots[1].email}/>

      <Card id={Robots[2].id} 
      name={Robots[2].name} 
      username={Robots[2].username}  
      email={Robots[2].email}/>

      <Card id={Robots[3].id} 
      name={Robots[3].name} 
      username={Robots[3].username}  
      email={Robots[3].email}/>

      <Card id={Robots[4].id} 
      name={Robots[4].name} 
      username={Robots[4].username}  
      email={Robots[4].email}/>

      <Card id={Robots[5].id} 
      name={Robots[5].name} 
      username={Robots[5].username}  
      email={Robots[5].email}/>
      
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
