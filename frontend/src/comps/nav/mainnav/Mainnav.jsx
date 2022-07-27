import React from 'react'
import { MainnavContainer, BarOne, Logo, SearchBar, Input, Btn, BarTwo, Span } from './mainnav.style'
function Mainnav() {
    return (
        < MainnavContainer>
            <BarOne>
                <Logo>Basic<Span>Tools</Span></Logo>
                <SearchBar>
                    <Input />
                    <Btn />
                </SearchBar>
            </BarOne>
            <BarTwo>

            </BarTwo>
        </ MainnavContainer>
    )
}

export default Mainnav