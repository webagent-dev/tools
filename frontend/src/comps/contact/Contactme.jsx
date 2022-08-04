import React from 'react'
import { ContactmeContainer, Header, ContactWrapper, Select, Option, Label, Input, Message, Text, Confirm, Send } from './contact.style'
function Contactme() {
    return (
        <ContactmeContainer>
            <Header>Contact webagent-dev</Header>
            <ContactWrapper>
                <Select>
                    <Option disable> Select your Title</Option>
                    <Option>Lorem.</Option>
                    <Option>Lorem.</Option>
                    <Option>Lorem.</Option>
                    <Option>Lorem.</Option>
                </Select>
                <Label >Your Name</Label>
                <Input />
                <Label >Your Email</Label>
                <Input />
                <Label> Your Message</Label>
                <Message />
                <Label >Captcha</Label>
                <Text>gdghrghrg</Text>
                <Input />
                <Send>Send Message</Send>
            </ContactWrapper>
        </ContactmeContainer>
    )
}

export default Contactme