import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const TicketCard = (props) => {
    const  ticket  = props.ticket;

    return(
        <div className="card-container">
            <div className="desc">
                <h2>
                    <Link to={`/show-ticket/${ticket._id}`}>
                        { ticket.title }
                    </Link>
                </h2>
                <p>{ticket.assignedToUserId}</p>
                <p>{ticket.description}</p>
                <p>{ticket.status}</p>

            </div>
        </div>
    )
};

export default TicketCard;
