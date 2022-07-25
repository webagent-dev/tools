import React from 'react'
import { NavContainer, NavWrapper, Navs, Text, Other } from './nav.style'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <NavContainer>
            <NavWrapper>
                <Navs>
                    <Link to='/'>
                        <Text>FULL HOME PAGE</Text>
                    </Link>
                </Navs>
                <Other>
                    <Link to='/about_me'>
                        <Text>About Me</Text>
                    </Link>
                    <Link to='/contact_me'>
                        <Text>Contact Me</Text>
                    </Link>
                </Other>
            </NavWrapper>
        </NavContainer>
    )
}

export default Nav