import styled from 'styled-components'

export const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background: black;
    border-top: 1px solid coral;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    color: white;
`

export const FooterWrapper = styled.section`

display: flex;
align-items: center;
gap: 1rem;
flex-direction: column;
font-family: monospace;
padding: 10px 0px;
`

export const Header = styled.h2`
    font-weight: 700;
`
export const Span = styled.span`
    font-family: cursive;
    color:  #E5D68A;
    text-transform: uppercase;
`
export const Nav = styled.section`
    display: flex;
    gap: 1rem;
`
export const Link = styled.div`
    font-weight: 22px;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
`
export const Foot = styled.p`
    font-weight: 500;
    color: gray;
`