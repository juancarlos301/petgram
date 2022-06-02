import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 30px;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 12px;
  padding: 10px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }
`

export const Button = styled.button`
  background: #0a133b;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
        opacity: 0.3;
    }
`

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 500;
  padding: 8px 0;
`

export const Span = styled.span`
  font-size: 15px;
  color: red;
  margin-bottom: 20px;
`
export const ImgA = styled.img`
width: 150px;
box-shadow: 0 10px 14px rgb(0 0 0 / 16%);
background-color: #d3e1f9;
border-radius: 20px;
`
export const DivAll = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`
export const ButtonOther = styled.button`
font-size: 1rem;
&:hover {
  color: green;
  cursor: pointer;
}
`