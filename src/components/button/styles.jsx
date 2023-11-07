import styled, { css } from "styled-components";

export const Button = styled.button`
    font-size: var(--fs-sm);
    font-family: "Raleway", sans-serif;
    font-family: "Ubuntu", sans-serif;
    cursor: pointer;
    transition: all 250ms ease;

    ${(props) =>
        props.$variant === "primary" &&
        css`
            background-color: var(--orange);
            border: 1px solid transparent;
            padding: 5px;
            border-radius: 8px;
            transition: border-color 200ms ease-in;

            &:hover {
                border: 1px solid black;
            }
        `}

    ${(props) =>
        props.$variant === "link" &&
        css`
            background-color: transparent;
            border: 0;
            text-decoration: underline;
            color: var(--dark-gray);
        `}

    ${(props) =>
        props.$variant === "ghost" &&
        css`
            border: 0;
            background-color: transparent;
            color: inherit;
            font-size: var(--fs-md);
        `}

    ${(props) =>
        props.$variant === "outlined" &&
        css`
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px;
            border-radius: 8px;
            border: 1px solid transparent;
            background-color: transparent;
            color: inherit;
            font-size: var(--fs-md);

            &:hover{
                border: 1px solid var(--orange);
                color: var(--orange);
            }
        `}
`;
