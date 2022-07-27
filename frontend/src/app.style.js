import styled, { createGlobalStyle } from 'styled-components'
import withReveal from 'react-reveal/withReveal'
import { Fade } from 'react-reveal'
import React from 'react'
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
`
export const AppContainer = withReveal(styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient( to top, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${props => props.bg}) center;
    
`, <Fade />)

export const NavWrapper = styled.div`
width: 100%;
height: 150px;
     position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;

`