import React from 'react';

import axios from 'axios'; //library for making requests (easier to use than fetch)
import { Link } from 'react-router-dom';
import TicketCard from '../components/TicketCard';
import { useState, useEffect } from 'react';


const REACT_BACKEND = process.env.REACT_APP_ENDPOINT;

function ShowTicketList(props){

  // setup hook
  const [tickets, setTickets] = useState([]);  

  // after component is rendered , get blogss from endpoint
  console.log();
  useEffect(() => {
    axios
    .get(REACT_BACKEND+ "/all")
    .then(res => {
      setTickets(res.data.tickets);
    })
    .catch(err =>{
      console.log('Error from ShowTicketList');
    })
  }, [])
  
  console.log(tickets);

  return (

    <div className="ShowTicketList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Blog List</h2>
          </div>

          <div className="col-md-11">
            <Link to="/create-ticket" className="btn btn-outline-warning float-right">
              + Add New Blog
            </Link>
            <br />
            <br />
            <hr />
          </div>

        </div>

        <div className="list">
              {tickets.map((ticket, k) =>
      <TicketCard ticket={ticket} key={k} />
    )}
        </div>
        
      </div>
    </div> );

}

export default ShowTicketList;