import React from 'react'
import { AboutmeContainer, Divider, Dividers, Stack, Header, Details, Img, Text, TechDetail, Icon, Name, Tech, ImgContainer } from './about.style'
function Aboutme() {
    return (
        <AboutmeContainer>
            <Divider>
                <Header>about me</Header>
                <Details>
                    <ImgContainer>
                        <Img />
                    </ImgContainer>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus cupiditate omnis? Fugit ab doloremque, modi dolor suscipit aperiam quo asperiores illo, doloribus nobis quod ipsum reiciendis magnam, error dolorum corporis maiores repellat atque eius tempore alias officiis quia quaerat cum! Aliquid facere ad voluptas accusamus laudantium ab hic provident?</Text>
                </Details>
            </Divider>
            <Dividers>
                <Header>Technology used</Header>
                <Tech>
                    <TechDetail>
                        <Icon />
                        <Name>Lorem, ipsum.</Name>
                    </TechDetail>
                    <TechDetail>
                        <Icon />
                        <Name>Lorem, ipsum.</Name>
                    </TechDetail>
                    <TechDetail>
                        <Icon />
                        <Name>Lorem, ipsum.</Name>
                    </TechDetail>
                    <TechDetail>
                        <Icon />
                        <Name>Lorem, ipsum.</Name>
                    </TechDetail>
                    <TechDetail>
                        <Icon />
                        <Name>Lorem, ipsum.</Name>
                    </TechDetail>
                    <TechDetail>
                        <Icon />
                        <Name>Lorem, ipsum.</Name>
                    </TechDetail>
                    <TechDetail>
                        <Icon />
                        <Name>Lorem, ipsum.</Name>
                    </TechDetail>
                    <TechDetail>
                        <Icon />
                        <Name>Lorem, ipsum.</Name>
                    </TechDetail>
                    <TechDetail>
                        <Icon />
                        <Name>Lorem, ipsum.</Name>
                    </TechDetail>
                    <TechDetail>
                        <Icon />
                        <Name>Lorem, ipsum.</Name>
                    </TechDetail>
                </Tech>
            </Dividers>
        </AboutmeContainer>
    )
}

export default Aboutme