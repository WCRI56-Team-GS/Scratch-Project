import React, { Component } from "react";
import Column from "./Column.jsx";

function Board () {
  return (
    <div className="column-container">
      <Column />
      <Column />
      <Column />
    </div>
  )
}

export default Board;