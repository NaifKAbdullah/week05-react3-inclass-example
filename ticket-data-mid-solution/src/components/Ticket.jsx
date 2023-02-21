import { Button, Card } from "react-bootstrap";

const Ticket = (props) => {

    const markTodo = () => {
        alert('would mark todo!')
    }

    const markInProgress = () => {
        alert('would mark in progress!')
    }

    const markDone = () => {
        alert('would mark done!')
    }

    return <Card>
        <h2 style={{fontSize: "1.25rem"}}>{props.title}</h2>
        <p>{props.description}</p>
        <Button variant="secondary" onClick={markTodo}>todo</Button>
        <Button variant="primary" onClick={markInProgress}>in progress</Button>
        <Button variant="success" onClick={markDone}>done</Button>
    </Card>
}

export default Ticket;