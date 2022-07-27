import React from 'react'
import { MainnavContainer, BarOne, Logo, SearchBar, Input, Btn, BarTwo, Span, Nav, Text } from './mainnav.style'
function Mainnav() {
    return (
        < MainnavContainer>
            <BarOne>
                <Logo>Basic<Span>Tools</Span></Logo>
                <SearchBar>
                    <Input type='text' placeholder='Search For Tools' autoFocus />
                    <Btn>Search </Btn>
                </SearchBar>
            </BarOne>
            <BarTwo>
                <Nav>
                    <Text>Lorem.</Text>
                </Nav>
                <Nav>
                    <Text>Lorem.</Text>
                </Nav>
                <Nav>
                    <Text>Lorem.</Text>
                </Nav>
                <Nav>
                    <Text>Lorem.</Text>
                </Nav>
                <Nav>
                    <Text>Lorem.</Text>
                </Nav>
            </BarTwo>
        </ MainnavContainer>
    )
}

export default Mainnav