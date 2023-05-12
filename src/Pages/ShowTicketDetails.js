import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';


const REACT_BACKEND = process.env.REACT_APP_ENDPOINT;

function ShowTicketDetails(props){
    const [ticket, setTicket] = useState({});
    const { id } = useParams()
    const navigate = useNavigate();

   
    useEffect(() => {

      axios
      .get(REACT_BACKEND +'/get-one/'+ id)
      .then(res => {
        console.log("Print-showTicketDetails-API-response: " + res.data.oneTicketPost);
        setTicket(res.data.oneTicketPost)
      })
      .catch(err => {
        console.log("Error from ShowTicketDetails");
      })

    }, [id])

    // on Delete Click Handler 
    const onDeleteClick = (id) => {

      axios
        .delete(REACT_BACKEND+'/delete-one/'+id)
        .then(res => {
          console.log(res);
          navigate("/");
        })
        .catch(err => {
         console.log(err);
        })
    };

   
    return (
      <div className="ShowTicketDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Ticket List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Ticket's Record</h1>
              <p className="lead text-center">
                  View Ticket's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { <TicketItem ticket={ticket} /> }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={onDeleteClick.bind(this, ticket._id)}>Delete Ticket</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-ticket/${ticket._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Ticket
              </Link>
              <br />
            </div>

          </div>
        </div>
      </div>
    );
    

}


//simple component for table header / row display
function TicketItem(props){
  console.log(props.ticket)
  return (<div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ props.ticket.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Description</td>
            <td>{ props.ticket.description }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Related Ticket ID's</td>
            {/* { props.ticket.relatedTickedIds.map((ids)=>{
              return(
                <tr>
                  <th scope="row"></th>
                  <td>{ids}</td>
                </tr>
              )
            })} */}
            <td>{ props.ticket.relatedTicketIds }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Assigned to User ID's</td>
            <td>{ props.ticket.assignedToUserId }</td>
          </tr>

          <tr>
            <th scope="row">5</th>
            <td>Status</td>
            <td>{ props.ticket.status }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Created At</td>
            <td>{ props.ticket.createdAt }</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Created by ID</td>
            <td>{ props.ticket.createdById }</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Last Modified</td>
            <td>{ props.ticket.lastModified }</td>
          </tr><tr>
            <th scope="row">9</th>
            <td>Last Updated By Id</td>
            <td>{ props.ticket.lastUpdatedById }</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShowTicketDetails;