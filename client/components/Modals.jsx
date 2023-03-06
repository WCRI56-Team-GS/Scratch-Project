import React, { Component } from "react";
import { useState, useEffect } from "react";

// Modal for the columns
const ColumnModal = ({ showColumnModal, setShowColumnModal, showCardModal, setShowCardModal, boardData, setBoardData}) => {
 
  
  /*
  boardData {
    boardName: { type: String, required: true, unique: true },
      columns: [
        {
          columnName: { type: String, required: true, unique: true },
          cards: [
            {
              cardText: { type: String, required: true, unique: true }
            }
          ]
        }
      ]
    }
  */

  const saveData = () => {
    // get the value from the input field
    const newColumnName = document.querySelector('.modal-column-input').value;

    // post users data to database
    // setBoardData(data => {
    //   ...data,
      // newColumnName
    // })
    // onClick

    // store it somewhere (local?)
    console.log('boardData: ', boardData);
    console.log('boardColumnData: ', boardData.columns);
    // setBoardData();
    // send a request to DB to udpate Board with new column
    // our local state needs to reflect added column
    // toggle columnModal

    console.log('save data button is running')
    setShowColumnModal(!showColumnModal)  //toggle columnModal on / off
    // setShowCardModal is true, column should also render with reflected data
    setShowCardModal(!showCardModal)
  }

  const deleteData = () => {
    setShowColumnModal(!showColumnModal)    // toggle columnModal on / off
  }

  return (
    <div className="modal-home">
      {console.log('modal was opened')}
      <div>
        <form>
          <input 
            className="modal-column-input"
            type="text"
            required
            placeholder="column name"
            // do we want an onChange here or wait until the input is finished
          />
        </form>
        <button className="modal-text-button"
          onClick={() => saveData()}>
            SAVE
        </button>
        <button className="modal-text-button"
          onClick={() => deleteData()}>
            DELETE
        </button>
      </div>
      {showCardModal && <CardModal />}
    </div>
  )
}



// Modal for the card
const CardModal = ({  showCardModal,setShowCardModal }) => {

  const addTask = () => {
    // post users data to database
    setShowCardModal(!showCardModal)
  }

  const deleteTask = () => {
    setShowCardModal(!showCardModal)
  }

  return (
    <div className="modal-home">
      <div>
        <form>
          <div>ADD CARD</div>
          <input 
            className="modal-input"
            type="text"
            required
            placeholders="add a task"
            // do we want an onChange here or wait until the input is finished
          />
        </form>
        <button className="modal-text-button"
          onClick={() => addTask()}>
           +
        </button>
        <button className="modal-text-button"
          onClick={() => deleteTask()}>
            X
        </button>
      </div>
    </div>
  )
}

export { ColumnModal, CardModal }