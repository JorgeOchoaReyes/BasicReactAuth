import { title } from 'process';
import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { useSingleMessage } from '../../hooks/useSingleMessage';
import {Center} from '../../components/UI'; 
import { useDelete } from '../../hooks/useDelete';
import { useIsAuth } from '../../hooks/useisAuth';

interface MessageDetailsProps {

}

export const MessageDetails: React.FC<MessageDetailsProps> = ({}) => {
    let {id} = useParams(); 
    const router = useNavigate()
    const {apiData, serverError, isLoading, getSingleMessage} = useSingleMessage(`${process.env.REACT_APP_API_URL}messages/${id}/`);
    const {apiData: deleteRes, 
           isLoading: deleteLoading, 
           serverError: deleteError, 
           deleteMessage } = useDelete(`${process.env.REACT_APP_API_URL}messages/${id}/`)
    const { isAuth } = useIsAuth(); 

    React.useEffect(() => {
      isAuth(); 
    }, [])

    return (
    <Center parent={true}>
        <Center parent={false}>
            {
                !apiData && isLoading ? <Loading /> : 
                serverError ? <div> {serverError.detail} </div> : 
                !apiData ?  <div> Message with id: {id} does not exist. </div> :
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
                    {deleteError && <div style={{color: 'red'}}> Cannot Delete this due to: {deleteError.detail} </div>}
                  </Card.Body>
                </Card>
            }
        </Center>
    </Center>
    );
}