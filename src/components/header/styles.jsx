import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header``;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-md);
`;

export const Logo = styled(Link)`
    font-size: var(--fs-xl);
    font-weight: var(--fw-md);
    display: flex;
    align-items: center;

    img {
        width: 45px;
    }
`;

export const Search = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    input {
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        border: 2px solid transparent;
        background-color: var(--light-gray);
        transition: all 250ms ease-in-out;

        &:focus {
            border: 2px solid var(--orange);
        }
    }
`;

export const Navbar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-md);
    cursor: pointer;

    & > * {
        transition: all 250ms ease-in-out;

        &:hover {
            color: var(--orange);
        }
    }
`;
