import styled from 'styled-components'

export const CompressContainer = styled.div`
        margin-top: 170px;
    max-width: 80%;
    flex: 3;
    background: linear-gradient( to top, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${props => props.bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

export const Header = styled.div`
    width: 100%;
    background: gray;
    height: 30px;
    padding: 20px;
    color: black;
    display: flex;
    align-items: center;
    font-family: monospace;
    font-weight: 700;
    gap: 1rem;
`
export const Desc = styled.div`
    color: white;
    padding: 20px;
    font-size: 20px;
    display: flex;
    gap: 1rem;
 `
export const CompressWrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;
 `
export const Btn = styled.div`
width: 200px;
height: 40px;
    padding: 10px 20px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
 `
export const BtnContainer = styled.div`
width: 80%;
height: 50px;
margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
 `
export const Text = styled.button`
min-width: 100%;
    padding: 10px 15px;
    text-transform: capitalize;
    font-size: 15px;
    font-family: monospace;
    font-weight: 700;
        background: red;
        border-radius: 5px;
        color: white;
        cursor: pointer;
 `
export const File = styled.input`
    position: absolute;
    top: 30%;
    opacity: .1;
    left: 10%;
 `
export const Clear = styled.button`
    padding: 10px 15px;
    text--transform: capitalize;
    font-family: cursive;
            border-radius: 5px;
            cursor: pointer;
    `
export const ImageOne = styled.div`
    width: 100%;
    height: 250px;
    border: 3px dotted gray;
    padding: 10px 15px;
`
export const ImageTwo = styled.div`

`

export const Img = styled.img`
    height: 40px;
`
export const Head = styled.h2``
export const DescContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
        padding: 20px;
border: 1px dashed gray;
border-radius: 10px;
`
export const DescTextHead = styled.h1`
    padding: 10px;
    background: lightgray;
    text-align: center;
    font-family: monospace;
    font-weight: 700;
    margin-bottom: 5px;
`
export const DescTextContainer = styled.div`
`
export const Div = styled.div`
display: flex;
align-items: center;

`
export const Title = styled.div`
    font-family: cursive;
    font-size: 12px;
`
export const DescImage = styled.img`

`
export const DescImageText = styled.div``
export const Span = styled.span``
export const DescText = styled.p`
    text-align: center;
    font-family: monospace;
    font-weight: 200;
    font-size: 13px;
    line-height: 20px;
`

export const Loader = styled.img`
width: 120px;
    align-self: center;
    padding: 10px 15px;
`
export const ContainerContainer = styled.div`
    width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
`