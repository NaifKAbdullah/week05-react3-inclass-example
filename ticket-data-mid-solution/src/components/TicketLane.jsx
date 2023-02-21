import { Col, Row } from "react-bootstrap"
import Ticket from "./Ticket";

const TicketLane = (props) => {
    return <div>
        <Row>
            <h2>{props.status} tickets</h2>
            {
                props.tickets.map(tick => {
                    return <Col
                        xs={2}
                        key={tick.id}
                    >
                        <Ticket {...tick} status={props.status} />
                    </Col>
                })
            }
        </Row>
        <br />
    </div>
}

export default TicketLane;