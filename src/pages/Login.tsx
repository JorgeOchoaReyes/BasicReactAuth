import React, { useEffect } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Center, Title } from '../components/UI';
import { useLogin } from '../hooks/useLogin';
import {token} from '../constants/constants'; 
import styled from 'styled-components';

interface LoginProps {

}

const Error = styled.div`
    font-size: 12px; 
    color: red; 
`

export const Login: React.FC<LoginProps> = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const failedAuth = React.useRef(false);  
    const tokenAuth = token(); 
    const {login, serverError, isLoading, loginFetch} = useLogin(`${process.env.REACT_APP_API_URL}api-token-auth/`); 
    const router = useNavigate();

    const handleLogin = () => {
        loginFetch({username: username, password: password}); 
    }
    if(login === false && serverError) failedAuth.current = true; 

    console.log(token)
    useEffect(() => {
        if(tokenAuth !== null && tokenAuth !== undefined && tokenAuth.length !== 0) router('/home');
        if(login === true && tokenAuth !== undefined && tokenAuth?.length !== 0 && tokenAuth !== null) router("/home")
    }, [login]);

    return (
        <Center parent={true}> 
            <Center parent={false}>
                <Form style={{padding: 40, borderRadius: 10, boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <Form.Group className="mb-3">
                        <Title textColor={'black'} bg='white'> Login </Title> 
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Username</Form.Label>
                      <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username...." />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Psasword</Form.Label>
                          <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password...." />
                    </Form.Group>
                    {failedAuth.current ? <Error> Incorrect username or password. </Error> : null}
                    
                    {isLoading ? 
                            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                                <Spinner  animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        :
                            <Button onClick={() => {
                                handleLogin(); 
                            }} >Submit</Button>
                    }
                </Form>
            </Center>
        </Center>
    );
}