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
            console.log(ticketData);
            setTicketLanes((oldLanes) => {
                return {
                    ...oldLanes,
                    todo: ticketData
                }
            });
        })
    }, []);

    return <div>
        <h1>Ticket Board</h1>
        <Container fluid>
            {
                Object.keys(ticketLanes).map(laneName => {
                    return <TicketLane
                        key={laneName}
                        status={laneName}
                        tickets={ticketLanes[laneName]}
                    />
                })
            }
        </Container>
    </div>
}

export default TicketBoard;