import styled from "styled-components";

interface CenterProps {
    parent: Boolean; 
}

interface TitleProps {
    bg?: string;
    textColor?: string;  
}

export const Title = styled.div<Pick<TitleProps, 'bg'|'textColor'>>`
    font-size: 25px; 
    color: ${(p) => p.textColor ? p.textColor : 'white'};
    display: flex; 
    flex-direction: row; 
    justify-content: center; 
    border: 1px solid black;
    background: ${(p) => p.bg ? p.bg : '#AA00FF'};

`

export const Center = styled.div<Pick<CenterProps, 'parent'>>`
    display: flex; 
    height: 100vh;
    justify-content: center;
    flex-direction: ${(p: CenterProps) => p.parent ? "row" : "column"}; 
`