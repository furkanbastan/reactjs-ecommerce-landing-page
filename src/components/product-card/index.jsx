import * as S from "./styles";
import { AddToBasket } from "../add-to-basket";

function ProductCard({ product }) {
    return (
        <S.ProductCard>
            <S.ImageWrapper to={`/products/${product.id}`}>
                <img src={product.image} alt="image" />
            </S.ImageWrapper>
            <S.Title to={`/products/${product.id}`}>{product.title}...</S.Title>
            <S.Price>{product.price}&nbsp;TL</S.Price>
            <AddToBasket product={product} />
            <S.Category>{product.category}</S.Category>
        </S.ProductCard>
    );
}

export { ProductCard };
