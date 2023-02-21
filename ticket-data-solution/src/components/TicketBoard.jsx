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

    const move = (from, to, tickId) => {

        if (from === to) {
            return;
        }

        setTicketLanes(oldLanes => {
            let fromLane = oldLanes[from].slice(); // shallow copy
            let toLane = oldLanes[to].slice(); // shallow copy
            
            const ticketToMove = fromLane.filter(tick => tick.id === tickId)[0]
            fromLane = fromLane.filter(tick => tick.id !== tickId);
            toLane = [...toLane, ticketToMove];

            return {
                ...oldLanes,
                [from]: fromLane,
                [to]: toLane
            }
        })
    }

    return <div>
        <h1>Ticket Board</h1>
        <Container fluid>
            {
                Object.keys(ticketLanes).map(laneName => {
                    return <TicketLane
                        move={move}
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