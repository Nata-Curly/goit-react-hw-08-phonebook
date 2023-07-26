import styled from '@emotion/styled';


export const Form = styled.form`
width: 320px;`

export const Label = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 16px;`

export const Btn = styled.button`
padding: 5px 10px;
width: 90px;
cursor: pointer;
font-size: 16px;
line-height: 1.2;
font-weight: 500;
letter-spacing: -0.01em;
color: black;
background-color: #cbbfbf4d;
border: none;
border-radius: 10px;
filter: drop-shadow(0px 4px 4px #00000040);
transition-property: color, background-color;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(.4, 0, .2, 1);
&:hover,
&:focus {
    color: white;
    background-color: green;
    }`
    


