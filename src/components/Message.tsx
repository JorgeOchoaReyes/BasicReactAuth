import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { MessageType } from '../types/types';

export const Message: React.FC<MessageType> = ({id, title, body, read, sent, sender, receiver}) => {
    return (
        <>  
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title> {sender} </Card.Title>
                <Card.Text>
                  {title}: {body}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
        </>
    );
}