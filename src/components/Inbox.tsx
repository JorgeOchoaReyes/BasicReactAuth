import React from 'react'
import { MessageType } from '../types/types';
import { Message } from './Message';
import { Title } from './UI';

interface InboxProps {
    data?: MessageType[]
}

// Inbox
//  ○ List of messages received
//  ○ Ability to delete individual message

let res = [
    {
        id:2216,
        title:"testing",
        body:"RN markget",
        read:false,
        sent:"2022-06-07T02:45:50.946602Z",
        sender:"test",
        receiver:"test"
    }
]

export const Inbox: React.FC<InboxProps> = ({data}) => {
    return (
        <> 
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
        </>
    );
}