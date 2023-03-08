import React, { Component } from "react";
import { useState, useEffect } from "react";
import Card from "./Card.jsx";
// import { CardModal } from "./Modals";



function Column ({columnName, cards, setShowCardModal}) {
  // const renderCards = cards.map((card, index) => {
  //   return (<div key={index} className='card'>{card.cardText}</div>);
  // })

  return (
    <div className='columnCont'>
      <div>Dummy Column Name</div>
      <div className='cardCont'>
        <Card />
        <Card />
        <Card />
      </div>
    <button >ADD CARD</button>
    </div>
  );
}
// onClick={() => setShowCardModal(true)}
export default Column;