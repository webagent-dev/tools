import styled from 'styled-components'

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
export const DateType = styled.p`
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

  export const  RecentContainer = styled.div``
    export const RecentHeader = styled.div``
export const ClearRecent = styled.button`
    width: 100%;
    text-align: center;
    padding: 8px 10px;
`
export const Url = styled.input`
    width: 90%;
    padding: 10px;
    margin: 0 auto;++
    background: gray;
    color: black;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 15px;

    &::placeholder{
                 color: #242B2E;
                 text-align: center;
    }
`
