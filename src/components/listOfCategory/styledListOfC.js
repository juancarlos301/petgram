import styled, { css } from 'styled-components'
export const List = styled.ul`
display: flex;
margin: 10px 0px 50px ;
overflow: scroll;
width: 100%;

${props => props.fixed && css`
{
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: 5px;
    transform: scale(.8);
    z-index: 1;
}
`}
`
export const Item = styled.li`
padding: 0 8px;
`
