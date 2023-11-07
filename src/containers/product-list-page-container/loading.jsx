import * as S from "./styles";
import Skeleton from "@/components/skeleton";

function ProductListPageLoading() {
    return (
        <S.ProductListPageLoading>
            {Array(5)
                .fill(null)
                .map((_, index) => (
                    <Skeleton width={200} height={300} key={index} />
                ))}
        </S.ProductListPageLoading>
    );
}

export { ProductListPageLoading };
