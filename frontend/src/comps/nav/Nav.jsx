import React from 'react'
import { NavContainer, NavWrapper, Navs, Text, Other } from './nav.style'
function Nav() {
    return (
        <NavContainer>
            <NavWrapper>
                <Navs>
                    <Text>FULL HOME PAGE</Text>
                </Navs>
                <Other>
                    <Text>About Me</Text>
                    <Text>Contact Me</Text>
                </Other>
            </NavWrapper>
        </NavContainer>
    )
}

export default Nav