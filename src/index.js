import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import img1 from './assets/imgs/cherry.png';
import img2 from './assets/imgs/kiwi.jpg';


const cards=[
  {
    id:1,
    img:img1,
    name:'cherry'
  },
  {
    id:2,
    img:img2,
    name:'olma'
  },
  {
    id:3,
    img:img1,
    name:'behi'
  },
  {
    id:4,
    img:img2,
    name:'cherry'
  },
  {
    id:5,
    img:img1,
    name:'cherry'
  },
  {
    id:6,
    img:img2,
    name:'cherry'
  },
  {
    id:7,
    img:img1,
    name:'cherry'
  },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='wrapper'>
    {cards.map((value)=>{
      return(
         <App key={value.id} value={value} />
      )
    })}
       </div>
  </React.StrictMode>
);
