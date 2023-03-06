import React, { Component } from "react";
import { useState, useEffect } from "react";



function Column ({boardName, cards}) {
  const renderCards = cards.map((card, index) => {
    return (<div>{card.cardText}</div>);
  })

  return (
    <div className='columnCont'>
      <div>{boardName}</div>
      <div className='cardCont'>
      {renderCards}
      </div>
      <div></div>
    </div>
  );
}

export default Column;