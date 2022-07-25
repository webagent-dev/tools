import React from 'react'
import styled from 'styled-components'
import { Aboutme } from '../files'
const AboutContainer = styled.div`
    width: 100%;
    height: 100%;
`
function About() {
    return (
        <AboutContainer>
            < Aboutme />
        </AboutContainer>
    )
}

export default About