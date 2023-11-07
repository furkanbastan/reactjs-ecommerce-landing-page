import styled, { css } from "styled-components";

export const Dropdown = styled.div`
    position: relative;
    display: inline-block;
`;

export const Item = styled.div`
    position: absolute;
    top: 110%;

    ${(props) =>
        props.$align === "right" &&
        css`
            right: 0;
        `}
    ${(props) =>
        props.$align === "left" &&
        css`
            left: 0;
        `}
    ${(props) =>
        props.$align === "center" &&
        css`
            right: 50%;
            transform: translateX(50%);
        `
    }
`;