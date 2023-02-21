import { Button, Card } from "react-bootstrap";

const Ticket = (props) => {

    const markTodo = () => {
        props.move(props.status, "todo", props.id)
    }

    const markInProgress = () => {
        props.move(props.status, "inprogress", props.id)
    }

    const markDone = () => {
        props.move(props.status, "done", props.id)
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