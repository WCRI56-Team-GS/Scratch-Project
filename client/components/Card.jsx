import React, { Component } from "react";

function Card () {

  return (
    <div className="card card-content-container">
      <h4>dummy-card-title</h4>
      <p>dummy-card-text</p>
      <div className="modal-button-cont">
        <button className="btn">Update</button>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default Card;