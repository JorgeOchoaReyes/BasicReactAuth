import React from 'react'
import { Spinner } from 'react-bootstrap';
import {Center} from './UI'; 


interface LoadingProps {
}

export const Loading: React.FC<LoadingProps> = ({}) => {
    return (
        <Center parent={true}>
            <Center parent={false}> 
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Center>
        </Center>
        );
}