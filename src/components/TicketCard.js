import { Card, CardBody, CardFooter, CardHeader, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';


const TicketCard = (props) => {
    const  ticket  = props.ticket;

    return(
  
            <Card>
                <CardHeader>
                    <Link to={`/show-ticket/${ticket._id}`}>
                        { ticket.title }
                    </Link>
                </CardHeader>
                <CardBody>
                    <Text>{ticket.assignedToUserId}</Text>
                    <Text>Last Modified:{ticket.lastModified}</Text>
                    <Text>{ticket.description}</Text>
                </CardBody>
                <CardFooter>
                    <Text>
                        Status: {ticket.status}
                    </Text>
                </CardFooter>

            </Card>
    )
};

export default TicketCard;
  


