import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useCompose } from '../hooks/useCompose';
import { Title } from './UI';

interface ComposeProps {

}

//Compose
//  ○ Includes recipient, title, and body

export const Compose: React.FC<ComposeProps> = ({}) => {
    const [title, setTitle] = React.useState(""); 
    const [body, setBody] = React.useState(""); 
    const [sendTo, setsendTo] = React.useState("");
    const {apiData, isLoading, serverError, createMessage } = useCompose(`${process.env.REACT_APP_API_URL}messages/`,);
    const handleCompose = async () => {
        console.log(title, body, sendTo)
        await createMessage({title: title, body: body, receiver: sendTo})
    }
    return (
    <>
        <Title> Compose </Title> 
        <Form>
            <Form.Group className="mb-3" controlId="body">
                <Form.Label>Send To: </Form.Label>
                <Form.Control required={true} value={sendTo} onChange={(e: any) => setsendTo(e.target.value)} placeholder="Text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title: </Form.Label>
                <Form.Control required={true} value={title} onChange={(e: any) => setTitle(e.target.value)} placeholder="Title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="body">
                <Form.Label>Text: </Form.Label>
                <Form.Control required={true} value={body} onChange={(e: any) => setBody(e.target.value)} placeholder="Text" />
            </Form.Group>

            <Button onClick={() => handleCompose()} variant="primary" type="submit">
              Submit
            </Button>
        </Form>
    </>
    );
}