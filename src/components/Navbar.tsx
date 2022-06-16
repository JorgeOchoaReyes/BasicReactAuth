import React from 'react'
import { Navbar, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface NavbarProps {

}

const NavbarContainer = styled.div`
    top: 0
`

export const NavigationBar: React.FC<NavbarProps> = ({}) => {
  const route = useNavigate(); 
    return (
    <>
       <Navbar bg='dark'>
          <Container>
            <Navbar.Brand onClick={() => route("/")} style={{color: 'white', cursor: 'pointer'}}>Messages</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>);
}