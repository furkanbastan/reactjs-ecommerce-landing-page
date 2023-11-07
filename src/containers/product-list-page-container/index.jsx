import { useSelector } from "react-redux";
import * as S from "./styles";
import { ProductCard } from "@/components/product-card";

function ProductListPageContainer() {
    const { products } = useSelector((state) => state.product);

    return (
        <S.ProductListPageContainer>
            {
                products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
            }
        </S.ProductListPageContainer>
    );
}

export { ProductListPageContainer };
