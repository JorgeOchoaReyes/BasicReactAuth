import React, { useEffect } from 'react'
import styled from 'styled-components';
import {Compose} from '../components/Compose'; 
import {Inbox} from '../components/Inbox'; 
import { Loading } from '../components/Loading';
import {Sent} from '../components/Sent'; 
import { token } from '../util/constants';
import { useFetch } from '../hooks/useFetch';
import {useIsAuth} from '../hooks/useisAuth'; 

interface HomeProps {

}

const GridBox = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 34%; 
`

export const Home: React.FC<HomeProps> = ({}) => {
    const {apiData: dataInbox, 
           serverError: errorInbox,
           isLoading: loadingInbox,
           fetchData: fetchInbox} = useFetch(`${process.env.REACT_APP_API_URL}messages/`);
    const {apiData: dataSent, 
           serverError: errorSent, 
           isLoading: loadingSent, 
           fetchData: fetchSent} = useFetch(`${process.env.REACT_APP_API_URL}messages/sent/`);
    const tokenAuth = token(); 
    const { isAuth } = useIsAuth(); 
  
    useEffect(() => {
        isAuth(); 
        fetchInbox(); 
        fetchSent(); 
    }, [])

    return (
    <>
        {
            loadingInbox || loadingSent || tokenAuth === null ? 
            <Loading /> 
            :
            <GridBox>
                <div> 
                    <Sent data={dataSent!}/>
                </div>
                <div> 
                    <Compose /> 
                </div>
                <div> 
                    <Inbox data={dataInbox!} /> 
                </div>
            </GridBox>
        }

    </>

    );
}