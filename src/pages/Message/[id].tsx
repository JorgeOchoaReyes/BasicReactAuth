import { title } from 'process';
import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { useSingleMessage } from '../../hooks/useSingleMessage';
import {Center} from '../../components/UI'; 
import { useDelete } from '../../hooks/useDelete';

interface MessageDetailsProps {

}

export const MessageDetails: React.FC<MessageDetailsProps> = ({}) => {
    let {id} = useParams(); 
    const {apiData, serverError, isLoading, fetchData} = useSingleMessage(`${process.env.REACT_APP_API_URL}messages/${id}/`);
    const {apiData: deleteRes, 
           isLoading: deleteLoading, 
           serverError: deleteError, 
           deleteMessage } = useDelete(`${process.env.REACT_APP_API_URL}messages/${id}/`)
    return (
    <Center parent={true}>
        <Center parent={false}>
            {
                !apiData || isLoading? <Loading /> : 
                <Card style={{ width: '100%' }}>
                  <Card.Body>
                    <Card.Title> {apiData.sender} </Card.Title>
                    <Card.Text>
                      {apiData.id} - {apiData.title}: {apiData.body}
                    </Card.Text>
                    <Card.Text>
                      Read: {apiData.read ? "Yes" : "No"} - Sent On: {apiData.sent}
                    </Card.Text>
                    <Card.Text>
                      From: {apiData.sender} To: {apiData.receiver}
                    </Card.Text>
                    <Button onClick={() => {
                        deleteMessage()
                    }} variant="danger">Delete</Button>
                  </Card.Body>
                </Card>
            }
        </Center>
    </Center>
    );
}