import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    width: var(--width-product-card);
    height: var(--height-product-card);
    background-color: var(--light-gray);
    border-radius: 8px;
    padding: 8px;
    transition: all 300ms ease;

    &:hover{
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
        transform: scale(105%);
    }
`;

export const ImageWrapper = styled(Link)`
    img{
        height: 170px;
    }
`;

export const Title = styled(Link)`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const Price = styled.span`
    font-weight: var(--fw-lg);
`;

export const Category = styled.h6`
    margin-top: auto;
    color: var(--dark-gray);
    font-size: var(--fs-sm);
`;