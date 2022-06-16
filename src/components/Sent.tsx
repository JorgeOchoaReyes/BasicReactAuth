import React from 'react'
import styled from 'styled-components';
import { MessageType } from '../types/types';
import { Message } from './Message';
import {Title} from './UI'; 

interface SentProps {
    data?: MessageType[]
}
//Sent
//  ○ List of messages sent
//  ○ Ability to delete individual message





export const Sent: React.FC<SentProps> = ({data}) => {
    return (
        <>
        <Title>Sent</Title>
            <div style={{overflowY: 'scroll', maxHeight: '100vh'}}> 
        
                { data && data.map((message: MessageType) => {
                        return <Message 
                        key={`#sent${message.id}`}
                        id={message.id}
                        title={message.title}
                        body={message.body}
                        read={message.read}
                        sent={message.sent}
                        sender={message.sender}
                        receiver={message.receiver}
                    /> 
                    })
                }
            </div>
        </>
    );
}