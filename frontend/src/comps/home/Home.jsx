import React from 'react'
import { HomeContainer, HomeWrapper, First, BigText, Text, Cap, Second, Note, Btn, Third, TextOne, Fouth, BoxContainer, Box, TextBox, Img } from './home.style'
import { Link } from 'react-router-dom'
import { nav } from '../../data'
const link = [1, 2, 3, 4, 5, 6, 7, 8]
function Home() {
    return (
        <HomeContainer>
            <HomeWrapper>
                <First>
                    <BigText>
                        <Text>Basic</Text>
                        <Cap>TOOLS</Cap>
                    </BigText>
                </First>
                <Second>
                    <Note>Collaborate with Me</Note>
                    <Btn> <Link to='/contact_me'> Contact Me</Link></Btn>
                </Second>
                <Third>
                    <TextOne bg='#E5D68A' border='1px solid gray' color='#242B2E'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, exercitationem?</TextOne>
                    <TextOne bg=' #242B2E'>Lorem ipsum dolor sit amet.</TextOne>
                </Third>
                <Fouth>
                    {
                        link.map((i) => (
                            <BoxContainer key='i'>
                                <Box>
                                    {/* <Img /> */}e
                                </Box>
                                <TextBox>navs.name</TextBox>
                            </BoxContainer>
                        ))
                    }
                </Fouth>
            </HomeWrapper>
        </HomeContainer>
    )
}

export default Home