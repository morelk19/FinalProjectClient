import { Card, CardBody, CardFooter, CardHeader, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';


const TicketCard = (props) => {
    const  ticket  = props.ticket;

    return(
        <SimpleGrid spacing={10} bg= "gray.200" minChildWidth= "300px">
            <Card>
                <CardHeader>
                    <Link to={`/show-ticket/${ticket._id}`}>
                        { ticket.title }
                    </Link>
                </CardHeader>
                <CardBody>
                    <Text>{ticket.assignedToUserId}</Text>
                    <Text>{ticket.description}</Text>
                </CardBody>
                <CardFooter>
                    <Text>
                        Status: {ticket.status}
                    </Text>
                </CardFooter>

            </Card>
        </SimpleGrid>



    )
};

export default TicketCard;
  


