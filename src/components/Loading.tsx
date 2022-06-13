import React from 'react'
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import {Center} from './UI'; 

interface CenterProps {
    parent: Boolean; 
}

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