import React from 'react'
import { Container, MainHeader, MainImg, MainHeaderText } from '../../app.style'
import { url, Recent} from '../../files'
import { UrlContainer, UrlWrapper,UrlHeader,InputContainer,Input,Short,Msg,DescContainer,DescHeader,DescText,FeatureContainer, Detail, DetailHeader,DetailText, Icon} from './url.style'
const detail = [1, 2, 3, 4, 5,6]
function Url() {
  return (
    <Container>
                <MainHeader>
                <MainImg src={url} alt='logo' />
                <MainHeaderText>Url-Shortner</MainHeaderText> 
            </MainHeader>
            <UrlContainer>
                <UrlWrapper>
                    <UrlHeader>Paste the URL to be shortened</UrlHeader>
                    <InputContainer>
                           <Input  type='text' placeholder='http://localhost:3000/url_shortner'/>
                           <Short>Shortner Url</Short>
                    </InputContainer>
             <Msg>This a free tool to shorten a URL or reduce a link
    easy to Use  and  making it easy to remember</Msg>
                </UrlWrapper>
            </UrlContainer>
            <DescContainer>
                <DescHeader>Simple and fast URL shortener!</DescHeader>
                <DescText>This tools allows to reduce long links from Instagram, Facebook, YouTube, Twitter, Linked In and top sites on the Internet, just paste the long URL and click the Shorten URL button. On the next screen, click on the go-to button to open or use copy and paste functionality,  you can use the link everywhere on the internet e.g chat and e-mail. After shortening the URL,</DescText>
            </DescContainer>
            <DescContainer>
                <DescHeader>Shorten, share and track</DescHeader>
                <DescText>Your shortened URLs can be used in publications, documents, advertisements, blogs, forums, instant messages, and other locations. Track statistics for your business and projects by monitoring the number of hits from your URL with the click counter, you do not have to register.</DescText>
            </DescContainer>
            <FeatureContainer>
                    {
                        detail.map((item) => (
                             <Detail key={item}>
                        <Icon />
                        <DetailHeader>Lorem, ipsum.</DetailHeader>
                        <DetailText>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.</DetailText>
                    </Detail>
                        ))
                    }
                </FeatureContainer>
            <Recent />
    </Container>

  )
}

export default Url