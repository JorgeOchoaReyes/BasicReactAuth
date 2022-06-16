import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MessageType } from '../types/types';

export const Message: React.FC<MessageType> = ({id, title, body, read, sent, sender, receiver}) => {
  const route = useNavigate(); 
    return (
        <>  
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title> {sender} </Card.Title>
                <Card.Text>
                  {id} - {title}: {body}
                </Card.Text>
                <Button onClick={() => route(`/message/${id}`)} variant="primary">See Message Details</Button>
              </Card.Body>
            </Card>
        </>
    );
}