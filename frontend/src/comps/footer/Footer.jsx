import React from 'react'
import { FooterContainer, FooterWrapper, Header, Span, Nav, Link, Foot } from './footer.style'
function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Header>Basic<Span>Tools</Span></Header>
                <Nav>
                    <Link>Lorem.</Link>
                    <Link>Lorem.</Link>
                    <Link>Lorem.</Link>
                    <Link>Lorem.</Link>
                    <Link>Lorem.</Link>
                </Nav>
                <Foot>&copy; webagent-dev {new Date().getFullYear()}</Foot>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer