import React from 'react'
import { MessageType } from '../types/types';
import { Message } from './Message';
import { Title } from './UI';

interface InboxProps {
    data?: MessageType[]
}


export const Inbox: React.FC<InboxProps> = ({data}) => {
    return (
        <div style={{overflowY: 'scroll', maxHeight: '100vh'}}> 
            <Title> Inbox </Title>
            { data && data.map((message: MessageType) => {
                    return <Message 
                    key={`#inbox${message.id}`}
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
    );
}