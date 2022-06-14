import React from 'react'
import { Button } from 'react-bootstrap';
import { json } from 'stream/consumers';
import { useCompose } from '../hooks/useCompose';
import { Title } from './UI';

interface ComposeProps {

}

//Compose
//  ○ Includes recipient, title, and body

export const Compose: React.FC<ComposeProps> = ({}) => {
    const {apiData, isLoading, serverError, fetchData } = useCompose("https://swapi.dev/api/people/1/", "GET");
    console.log(apiData, isLoading, serverError)
    return (
    <>
        <Title> Compose </Title> 
        {apiData && !isLoading ? JSON.stringify(apiData) : null}
        <Button onClick={() => fetchData()} />
    </>
    );
}