import React from 'react'
import {
    CompressContainer, Header, Desc, CompressWrapper, BtnContainer, Btn, Text, File, Clear, ImageOne, ImageTwo, Img, Head,
    DescContainer, DescTextContainer, Div, Title, DescImageText, DescImage, Span, DescText, DescTextHead, Loader, ContainerContainer, Download,
    H2, P, ImageContainer,DetailContainer,Detail
} from './conpress.style'
import { cat, imgCompressor, Recent } from '../../files'
import { Container, MainHeader, MainImg, MainHeaderText } from '../../app.style'


function Compress() {
    return (
        <Container bg={cat}>
            <MainHeader>
                <MainImg src={imgCompressor} alt='logo' />
                <MainHeaderText>Image Compressor</MainHeaderText>
            </MainHeader>
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
                    <ImageOne>
                        <ImageContainer>
                            <ImageTwo />
                        </ImageContainer>
                        <DetailContainer>
                            <Detail>
                                <H2>Name:</H2>
                                <P>Lorem.</P>
                            </Detail>
                            <Detail>
                                <H2>type:</H2>
                                <P>Lorem.</P>
                            </Detail>
                            <Detail>
                                <H2>size:</H2>
                                <P>Lorem.</P>
                            </Detail>
                        </DetailContainer>
                    </ImageOne>
                    <Download>Compress</Download>
                </ContainerContainer>
            </CompressWrapper>

<Recent />
        </Container>
    )
}

export default Compress