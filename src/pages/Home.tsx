import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {Compose} from '../components/Compose'; 
import {Inbox} from '../components/Inbox'; 
import { Loading } from '../components/Loading';
import {Sent} from '../components/Sent'; 
import { token } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';
import { MessageType } from '../types/types';
import {useIsAuth} from '../hooks/useisAuth'; 

interface HomeProps {

}

const GridBox = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 34%; 
`

export const Home: React.FC<HomeProps> = ({}) => {
    const {apiData, serverError, isLoading, fetchData} = useFetch(`${process.env.REACT_APP_API_URL}messages/`, "GET");
    const tokenAuth = token(); 
    const { isAuth } = useIsAuth(); 
  
    useEffect(() => {
        isAuth(); 
        fetchData(); 
    }, [])

    return (
    <>
        {
            isLoading || tokenAuth === null ? 
            <Loading /> 
            :
            <GridBox>
                <div> 
                    <Sent data={apiData?.filter((message: MessageType) => message.sender === 'test' )}/>
                </div>
                <div> 
                    <Compose /> 
                </div>
                <div> 
                    <Inbox data={apiData?.filter((message: MessageType) => message.sender !== 'test' )} /> 
                </div>
            </GridBox>
        }

    </>

    );
}