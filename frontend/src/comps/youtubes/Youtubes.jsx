import React from 'react'
import { InfoContainer, InfoHeader, YoutubesWrapper, Label, CardWrapper, Select, Option, SelectLabel, Download,  Url, Text} from './youtube.style'
import { youBg, youtube, Recent } from '../../files'
import { Container, MainHeader, MainImg, MainHeaderText, } from '../../app.style'
function Youtubes() {
    return (
        <Container bg={youBg}>
            <MainHeader>
                <MainImg src={youtube} alt='logo' />
                <MainHeaderText>Image Compressor</MainHeaderText>
            </MainHeader>
            <InfoContainer>
                <InfoHeader>How to use</InfoHeader>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam culpa sequi ab rerum, iste quo incidunt id reiciendis deleniti perspiciatis recusandae optio deserunt consequatur cum molestiae numquam mollitia sunt. Maxime.</Text>
            </InfoContainer>
            <YoutubesWrapper>
                <CardWrapper>
                    <Label>Video Link:</Label>
                    <Url type='text' placeholder='please enter a valid url' />
                    <Label>Format:</Label>
                    <Select>
                        <SelectLabel label='Audio'>
                            <Option value='MP3'>MP3</Option>
                            <Option value='M4A'>M4A</Option>
                            <Option value='WEBM'>WEBM</Option>
                            <Option value='AAC'>AAC</Option>
                            <Option value='FLAC'>FLAC</Option>
                            <Option value='OPUS`'>OPUS</Option>
                            <Option value='OGG'>OGG</Option>
                            <Option value='WAV'>WAV</Option>
                        </SelectLabel >
                        <SelectLabel label='Video'>
                            <Option value='MP4 (360P)'>MP4 (360P)</Option>
                            <Option value='MP4 (480P)'>MP4 (480P)</Option>
                            <Option value='MP4 (720P)' selected>MP4 (720P)</Option>
                            <Option value='MP4 (1080P)'>MP4 (1080P) </Option>
                            <Option value='MP4 (1440P)'>MP4 (1440P)</Option>
                            <Option value='WEBM (4K)'>WEBM (4K)</Option>
                            <Option value='WEBM (8K)'>WEBM (8K)</Option>
                        </SelectLabel>
                    </Select>
                    <Download src="https://loader.to/api/button/?=mp3&color=E5D68A">Dawnload</Download>
                </CardWrapper>
            </YoutubesWrapper>
            <Recent />
        </Container>
    )
}

export default Youtubes