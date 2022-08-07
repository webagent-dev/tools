import React from 'react'
import styled from 'styled-components'
import { Section, Youtubes } from '../files'
const YoutubeContainer = styled.div`
     width: 100%;
    max-width: 1024px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`
function Youtube() {
    return (
        <YoutubeContainer>
            <Youtubes />
            <Section />
        </YoutubeContainer>
    )
}

export default Youtube