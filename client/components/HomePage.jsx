import React, { Component } from "react";
import { useState, useEffect } from "react";
import  { ColumnModal, CardModal } from './Modals.jsx';
import Column from './Column.jsx'

function HomePage() {

  // state to render a column creation modal
  const [showColumnModal, setShowColumnModal] = useState(false)
  // state to render a card creation modal
  const [showCardModal, setShowCardModal] = useState(false)
  const [columns, setColumns] = useState(null);

//useEffect
  //Make a fetch Request to the server for Column ID(s) associated with the user
  //Check the cookie for authorization 
    //fetch GET request to DB.
      //Should receive an object which we can use to setState OR pass onto Columns component


  return (
    <>
      <form>
        <div> Home Page
          <button className="logOut">LOG OUT</button>
        </div>
        <div>
            <button className="addColumn" onClick={() => setShowColumnModal(true)}>ADD COLUMN</button>
            {console.log(showColumnModal)}
        </div>
      </form>
      <div className="modal-box">
      {/* when showModal is set to true a column modal will render */}
      {/* having issues with page re-rendering when state is updated. modal does not stay up */}
      {showColumnModal && <ColumnModal setShowColumnModal={setShowColumnModal} />}
      </div>
      <div>
        {/* //Populate with Column components */}
        {/* <Column columns={columns}/> */}
      </div>
    </>
  );

}

export default HomePage;