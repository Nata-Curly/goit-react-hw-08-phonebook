import styled from '@emotion/styled';

export const FilterLabel = styled.label`
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
font-size: 18px;
`

export const FilterInput = styled.input`
height: 25px;
width: 200px;
padding: 0 10px;
border: 1px solid #cbbfbf4d;
border-radius: 10px;
filter: drop-shadow(0px 4px 4px #00000040);
transition-property: border;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(.4, 0, .2, 1);
&:hover,
&:focus {
    border: 1px solid blue;
    }`