import styled from 'styled-components'

export const List = styled.div`
border: 1px solid #444;
border-radius: 5px;
padding: 10px 20px;
margin-top: 20px;
color: #444;
`

export const Title = styled.div`
color: #888;
font-size: 16px;
::after{
content:':'
}
`

export const Content = styled.div`
font-size: 18px;
text-indent: 2em;
`

export const Delete = styled.div`
float: right;
`