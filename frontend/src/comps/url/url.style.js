import styled from 'styled-components'
export const UrlContainer = styled.section`
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    font-family: monospace;
`
export const UrlWrapper = styled.main`
    width: 100%;
      padding: 10px;
      display: flex;
      gap: 1rem;
      flex-direction: column;
`
export const UrlHeader = styled.h2`
text-transform: capitalize;
font-size: 25px;
font-weight: 700;
`
export const InputContainer = styled.div`
width: 100%;
height: 40px;
display: flex;
border-radius: 5px;
`
export const Input = styled.input`
    flex: 1;
    height: 100%;
    border: 1px solid lightgray;
padding: 5px 10px;

::placeholder{
    padding: 0px 10px;
    font-size: 15px;
    font-family: cursive;
    color: lightgray;
}
`
export const Short = styled.button`
    border: none;
    outline: none;
    font-weight: 700;
    padding: 5px;
    background: skyblue;
    color: white;
    font-family: cursive;
`
export const Msg = styled.p`
    font-size: 20px;
    color: gray;
`
export const DescContainer = styled.section`
    padding: 10px;
    text-align: center;
    display: flex;
    gap: 1rem;
    flex-direction: column; 
`
export const DescHeader = styled.h2`
    font-weight: 700;
`
export const DescText = styled.p`
        font-size: 12px;
    font-family: monospace;
`
export const FeatureContainer = styled.section`
width: 80%;
margin: 0 auto;
    margin-top: 20px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;

`
export const Detail = styled.main``
export const DetailHeader = styled.h2``
export const DetailText = styled.p``
export const Icon = styled.div``