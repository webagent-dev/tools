import React from 'react'
import styled from 'styled-components'
import { Contactme, Section } from '../files'
const ContactContainer = styled.div`
       width: 100%;
    max-width: 1024px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`
function Contact() {
    return (
        <ContactContainer>
            <Contactme />
            <Section />
        </ContactContainer>
    )
}

export default Contact