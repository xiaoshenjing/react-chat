import styled from 'styled-components'

export const Wrapper = styled.div`
margin: 40px auto 0;
padding: 10px;
`

export const Label = styled.label`
font-size: 18px;
display: flex;
align-items: center;
justify-content: space-between;
width: 500px;
margin: 10px auto;
`

export const Input = styled.input`
background-color: #efefef;
width: 80%;
outline: none;
border: 1px solid #eee;
border-radius: 8px;
padding: 8px;
box-sizing: border-box;
font-size: 16px;
:focus{
    border: 1px solid #ddf;
}
`

export const ButtonWrapper = styled.div`
margin: 60px auto 0;
display: flex;
align-items: center;
justify-content: space-between;
width: 200px;
`