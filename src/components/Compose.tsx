import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useCompose } from '../hooks/useCompose';
import { ErrorMessage, Title } from './UI';

interface ComposeProps {

}

export const Compose: React.FC<ComposeProps> = ({}) => {
    const [title, setTitle] = React.useState(""); 
    const [body, setBody] = React.useState(""); 
    const [sendTo, setsendTo] = React.useState("");
    const {apiData, serverError, createMessage } = useCompose(`${process.env.REACT_APP_API_URL}messages/`,);
    const composeTry = useRef(false);
    const handleCompose = async (e: any) => {
        e.preventDefault(); 
        composeTry.current = true; 
        createMessage({title: title, body: body, receiver: sendTo})
    }

    React.useEffect(() => {
        if(apiData?.data === "success") {
            setTitle("");
            setBody("");
            setsendTo("");
        }
    }, [apiData])

    return (
    <>
        <Title> Compose </Title> 
        <Form>
            <Form.Group className="mb-3" controlId="receiver">
                <Form.Label>Send To: </Form.Label>
                <Form.Control required={true} value={sendTo} onChange={(e: any) => {setsendTo(e.target.value)}} placeholder="Text" />
                {serverError && serverError.errors && <ErrorMessage> {serverError.errors.receiver} </ErrorMessage>}
                {!apiData && composeTry.current && <ErrorMessage> User does not exist </ErrorMessage>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title: </Form.Label>
                <Form.Control required={true} value={title} onChange={(e: any) => setTitle(e.target.value)} placeholder="Title" />
                {serverError && serverError.errors && <ErrorMessage> {serverError.errors.title} </ErrorMessage>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="body">
                <Form.Label>Text: </Form.Label>
                <Form.Control required={true} value={body} onChange={(e: any) => setBody(e.target.value)} placeholder="Text" />
                {serverError && serverError.errors && <ErrorMessage> {serverError.errors.body} </ErrorMessage>}
            </Form.Group>

            <Button onClick={(e) => handleCompose(e)} variant="primary">
              Submit
            </Button>
        </Form>
    </>
    );
}