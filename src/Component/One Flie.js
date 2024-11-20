import React from 'react';
import Nhl from './Nhl';

function ComponentA({ onButtonClick }) {
  const handleClick = () => {
    onButtonClick(<Nhl/>);
  };

  return (
    <div>
      <button onClick={handleClick} style={{backgroundColor:'lightgreen' ,
         height:" 170px",
         width: "160px",
         border:"50px",
         borderRadius: "20%"
      }}>  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/emlehbuwgsmryxhwzhvq" alt="Image" style={{ width: '100%', height: 'auto' }} /></button>
     
    </div>
  );
}

export default ComponentA;