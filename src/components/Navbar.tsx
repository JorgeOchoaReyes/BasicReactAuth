import React from 'react'
import { Navbar, Container} from 'react-bootstrap';
import styled from 'styled-components';

interface NavbarProps {

}

const NavbarContainer = styled.div`
    top: 0
`

export const NavigationBar: React.FC<NavbarProps> = ({}) => {
    return (
    <>
       <Navbar bg='dark'>
          <Container>
            <Navbar.Brand style={{color: 'white'}}>Messages</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text style={{color: 'white'}}>
                Signed in as: Mark Otto
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>);
}