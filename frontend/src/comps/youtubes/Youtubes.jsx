import React from 'react'
import { YoutubesContainer } from './youtube.style'
import { youBg } from '../../files'
function Youtubes() {
    return (
        <YoutubesContainer bg={youBg}>
            <Header>
                <Img src={imgCompressor} alt='logo' />
                <Head>Image Compressor</Head>
            </Header>
        </YoutubesContainer>
    )
}

export default Youtubes