import React, { Component } from "react";
import { useState, useEffect } from "react";



function Column ({columns}) {

  //iterate through the columns array of objects
  const renderColumns = columns.map( col => {
      let cards = col.cards;
      //generate an array of cardtexts
      let renderCards = cards.map(card => {
        return (
          <div>{card.cardText}</div>
        )
      })
      //return a column component that contains the column name and the card texts as their own components.
    return (
      <div className="column">
          <div>{col.columnName}</div>
          {renderCards}
      </div>
    )
  })


  return (
    <div className="column-container">
      {renderColumns}
    </div>
  );
}

export default Column;