import React from 'react'
import styled from 'styled-components'
import { Aboutme, Section } from '../files'
const AboutContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`
function About() {
    return (
        <AboutContainer>
            < Aboutme />
            <Section />
        </AboutContainer>
    )
}

export default About