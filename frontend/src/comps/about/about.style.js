import styled from 'styled-components'

export const AboutmeContainer = styled.div`
    margin-top: 40px;
    max-width: 80%;
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 2rem;

`

export const Divider = styled.div`
 width: 100%;
 height: auto;
 background: whitesmoke;
>?
`
export const Dividers = styled.div`
 width: 100%;
 height: auto;
 background: whitesmoke;
 border-radius: 5px;
`
// export const Stack = styled.div``
export const Stack = styled.div``
export const Header = styled.div`
    background: lightgray;
    padding: 10px 15px;
    font-family: monospace;
    font-size: 20px;
    text-transform: capitalize;
    color: #242B2E;
    font-weight: 700;
`
export const Details = styled.div`
    display:flex;
    gap: 1rem;
     padding: 20px 25px;
`
export const ImgContainer = styled.div`
     width: 800px;
     height: 200px;
     background: red;
     border: 2px solid lightgray;
     border-radius: 5px;
`
export const Img = styled.img`

`
export const Text = styled.div``
export const TechDetail = styled.div`
    background: red;
`
export const Icon = styled.div``
export const Name = styled.div``
export const Tech = styled.div`
         padding: 20px 25px; 
        display: grid;
        grid-template-column: repeat(autofit, minmax(200px, 1fr));
         gap: 1rem;
`