import styled from "styled-components";

export const CounterContainer = styled.div`
width: 10vw;
width: 150px;
height: 6.5vh;
border: none;
border-radius: 8px;
display: flex;
justify-content: space-evenly;
align-items: center;
background: #ffffff;
`
export const IncrementBtn = styled.button`
width: 25px;
height: 25px;
font-size: 20px;
border-radius: 50%;
border: none;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 0px 4px 4px rgba(181, 181, 181, 0.5);
cursor: pointer;
opacity: 0.7;

&:hover {
    opacity: 0.9;
}
`
export const DecrementBtn = styled.button`
width: 25px;
height: 25px;
font-size: 20px;
border-radius: 50%;
border: none;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 0px 4px 4px rgba(181, 181, 181, 0.5);
cursor: pointer;
opacity: 0.7;

&:hover {
    opacity: 0.9;
}
`

export const CurrentCount = styled.h3`
color: #000000;
font-size: 1rem;
font-weight: 500;
`
