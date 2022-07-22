import styled, { createGlobalStyle } from 'styled-components'
import withReveal from 'react-reveal/withReveal'
import { Fade } from 'react-reveal'
import React from 'react'
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: darkgray;
        color: white;
    }
`
export const AppContainer = withReveal(styled.div`
    width: 100%;
    height: 100%;
`, <Fade />)