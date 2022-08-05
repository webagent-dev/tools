import React from 'react'
import {
    CompressContainer, Header, Desc, CompressWrapper, BtnContainer, Btn, Text, File, Clear, ImageOne, ImageTwo, Img, Head,
    DescContainer, DescTextContainer, Div, Title, DescImageText, DescImage, Span, DescText, DescTextHead, Loader, ContainerContainer
} from './conpress.style'
import { cat, imgCompressor } from '../../files'
function Compress() {
    return (
        <CompressContainer bg={cat}>
            <Header>
                <Img src={imgCompressor} alt='logo' />
                <Head>Image Compressor</Head>
            </Header>
            <Desc>
                <DescContainer>
                    <Div>
                        <DescImage src='/image/tools.png' alt='logo_image' />
                        <DescImageText>Basic<Span>Tools</Span></DescImageText>
                    </Div>
                    <Title>Image Compressor</Title>
                </DescContainer>
                <DescTextContainer>
                    <DescTextHead>How To Use</DescTextHead>
                    <DescText> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate perferendis eaque illum consequuntur unde possimus, similique laborum at quo incidunt!</DescText>
                </DescTextContainer>
            </Desc>
            <CompressWrapper>
                <BtnContainer>
                    <Btn>
                        <Text>add image</Text>
                        <File type='file' />
                    </Btn>
                    <Clear>Clear Local Data</Clear>
                </BtnContainer>
                <Loader src='/image/loader.svg' alt='loader_pics' />
                <ContainerContainer>
                    <ImageOne></ImageOne>
                    <Loader src='/image/loader.svg' alt='loader_pics' />
                    <ImageOne></ImageOne>
                </ContainerContainer>
            </CompressWrapper>
        </CompressContainer>
    )
}

export default Compress