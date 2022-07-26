import styled from 'styled-components'

export const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const HomeWrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
`
export const First = styled.div``
export const BigText = styled.div`
    display: flex;
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 50px;
        border-radius: 5px;  
          padding: 15px;
`
export const Text = styled.div`
    font-family: monospace;
`
export const Cap = styled.div`
    font-family: cursive;
 color: #E5D68A;
`
export const Second = styled.div`
width: 600px;
height: 40px;
border: 2px solid gray;
display: flex;
align-items: center;
font-family: monospace;
font-weight: 700;
text-transform: uppercase;
`
export const Note = styled.div`
height: 100%;
flex: 1;
    background: #242B2E;
display: flex;
align-items: center;
padding: 5px 15px;
`
export const Btn = styled.div`
background: #E5D68A;
height: 100%;
padding: 5px 15px;
display: flex;
align-items: center;
cursor: pointer;
color:  #242B2E;
`
export const Third = styled.div`
    width: 700px;
    height: 80px;
`
export const TextOne = styled.div`
    width: 100%;
    height: 40px;
    background: ${props => props.bg};
    border: ${props => props.border};
    color: ${props => props.color};
        padding: 5px 15px;
        display: flex;
        align-items: center;
        border-radius: 5px;
`
export const Fouth = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
`
export const BoxContainer = styled.div`
width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.2rem;
    margin: 5px 10px;
`
export const Box = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background:  #E5D68A;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const TextBox = styled.div`
width: 100%;
text-align: center;
`