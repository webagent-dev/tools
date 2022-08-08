import React from 'react'
import { } from './youtube.style'
import { youBg, youtube } from '../../files'
import { Container, MainHeader, MainImg, MainHeaderText } from '../../app.style'
function Youtubes() {
    return (
        <Container bg={youBg}>
            <MainHeader>
                <MainImg src={youtube} alt='logo' />
                <MainHeaderText>Image Compressor</MainHeaderText>s
            </MainHeader>
        </Container>
    )
}

export default Youtubes