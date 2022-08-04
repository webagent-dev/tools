import styled from 'styled-components'
export const ContactmeContainer = styled.div`
        margin-top: 170px;
    max-width: 80%;
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: whitesmoke;
     color: : #242B2E;
`

export const Header = styled.div`
width: 100%;
    background: lightgray;
    padding: 10px;
    font-family: monospace;
    font-weight: 700;
    font-size: 20px;
color: : #242B2E;
`
export const ContactWrapper = styled.div`
    padding: 5px 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const Select = styled.select`
    width: 200px;
    padding: 8px;
    background: lightgray;
    border: none;
    outline: none;
    font-weight: 500;
    border-radius: 5px;
 color: : #242B2E;
`
export const Option = styled.option`
    font-weight: 200;
    font-size: 20px; 
    font-family: cursive;
    margin-top: 5px;
    border-bottom: 1px solid lightgray;
`
export const Label = styled.label`
    font-weight: 500;
    font-family: monospace;
    font-size: 18px;
`
export const Input = styled.input`
    width: 100%;
    padding: 8px 10px;
    background: white;
    border: none;
    outline: none;
    border-radius: 3px;
`
export const Message = styled.textarea`
      max-width: 100%;
      min-width: 100%;
      max-height: 150px;
      min-height: 150px;
    padding: 8px 10px;
        border: none;
    outline: none;
    border-radius: 3px;

`
export const Text = styled.h3`
    width: 150px;
    background: linear-gradient(to top, lightgray, 50%, gray) center;
    padding: 10px 15px;
    border-radius: 5px;
`
// export const Confirm = styled.div``
export const Send = styled.button`
    width: 150px;
    padding: 6px 20px;
    font-weight: 700;       
    font-family: monospace;
    background: green;
    border: none;
    border-radius: 3px;
    font-size: 15px;
    cursor: pointer;
`