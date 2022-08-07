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
    display: flex;
    gap: 1rem;
    // justify-content:space-around;
`
export const ImageTwo = styled.img`

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
        gap: 2rem;
`

export const Download = styled.button`
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 700;
    font-family: cursive;
    color: gray;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
`

export const Recent = styled.div`
    width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
`
export const RecentHead = styled.h2`
padding: 5px 10px;
    font-weight: 700;
    font-family: monospace;

`
export const Grid = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    gap: 1rem;
    flex-direction: column;;
    max-height: 300px;
    padding: 5px 10px;
    overflow-y: scroll;
`
export const RecentImage = styled.img`
    width: 100px;
    height: 50px;
    background: red;
    border-radius: 4px;
`
export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const Detail = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    font-family: monospace;
`
export const H2 = styled.h2`
    text-transform: capitalize;
    font-size: 15px;
           font-weight: 700;
`
export const P = styled.p`
        font-family: cursive;
        font-size: 12px;
        font-weight: 500;
`
export const ImageContainer = styled.div`
        width: 300px;
        height: 220px;
        border: 2px solid gray;
        background: red;
        border-radius: 5px;
`   

export const GridDataContainer = styled.div`
    width: 100%;
    background: lightgray;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
    padding: 2px 10px;
    color: black;
    border-radius: 5px;
`
export const Date = styled.p`
        font-weight: 500;
        font-size: 20px;
        font-family: cursive;

`
export const FunctContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const ReComp = styled.button`

`
export const Del = styled.button`
    padding: 5px 10px;
    border: none;
    outline: none;
    font-weight: 700;
    font-family: cursive;
    color: gray;
    text-transform: capitalize;
    background: whitesmoke;
    border-radius: 5px;
    cursor: pointer;
`
export const Remove = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-family: cursive;
    text-transform: capitalize;
    cursor: pointer;
`