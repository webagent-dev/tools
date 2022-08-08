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
height: 170px;
     position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;

`
export const PageContainer = styled.div`
     width: 100%;
    max-width: 1024px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`
export const Container = styled.div`
     margin-top: 170px;
    max-width: 80%;
    flex: 3;
    background: linear-gradient( to top, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${props => props.bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
export const MainHeader = styled.div`
        width: 100%;
    background: gray;
    height: 30px;
    padding: 20px;
    color: black;
    display: flex;
    align-items: center;
    font-family: monospace;
    font-weight: 700;
    gap: 1rem;
`
export const MainImg = styled.img`
      height: 40px;
`
export const MainHeaderText = styled.div``