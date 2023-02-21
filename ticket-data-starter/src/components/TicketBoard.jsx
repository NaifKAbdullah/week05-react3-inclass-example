import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import TicketLane from './TicketLane'

const TicketBoard = (props) => {

    const [ticketLanes, setTicketLanes] = useState({
        todo: [],
        inprogress: [],
        done: [],
    })

    useEffect(() => {
        fetch('https://cs571.org/s23/week5/api/tickets', {
            headers: {
                "X-CS571-ID": "bid_00000000000000000000"
            }
        })
        .then(res => res.json())
        .then(ticketData => {
            // TODO Put all the tickets in the TODO lane!
        })
    }, []);

    return <div>
        <h1>Ticket Board</h1>
        <Container fluid>
            {
                /* TODO: Display the ticket lanes! */
            }
        </Container>
    </div>
}

export default TicketBoard;