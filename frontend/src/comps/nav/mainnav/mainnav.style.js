import styled from 'styled-components'

export const MainnavContainer = styled.div`
    width: 100%;
    max-width: 1024px;
margin: 0 auto;
display: flex;
flex-direction: column;
gap: .2rem;     
`

export const BarOne = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Span = styled.span`
    font-family: cursive;
    text-transform: uppercase;
    color: #E5D68A;
`
export const Logo = styled.div`
    font-size: 25px;
    font-weight: 700;
    font-family: monospace;
`
export const SearchBar = styled.div`
    width: 400px;
    height: 35px;
    background: black;
    border-radius: 5px;
`
export const Input = styled.input`
    width: 70%;
    height: 100%;
        background: black;
        border: none;
        outline: none;
        border: 1px solid gray;
          border-radius: 5px;

          &::placeholder{
            padding: 0px 20px;
            font-family: monospace;
            color: white;
          }
`
export const Btn = styled.button`
width: 30%;
 height: 100%;
background: coral;
  border-radius: 5px;
  cursor: pointer;
`
export const BarTwo = styled.div`
width: 100%;
    background: coral;
    display: flex;
    padding: 10px 15px;
      border-radius: 5px;       
`

export const Nav = styled.div`
    flex: 1;
    cursor: pointer;
`
export const Text = styled.div`

`