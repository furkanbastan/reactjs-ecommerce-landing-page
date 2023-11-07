import { ProductListPageContainer } from "@/containers/product-list-page-container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/product-store";
import { ProductListPageLoading } from "@/containers/product-list-page-container/loading";

function ProductListPage() {
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    if (status === "loading") return <ProductListPageLoading />;

    return <ProductListPageContainer />;
}

export { ProductListPage };
