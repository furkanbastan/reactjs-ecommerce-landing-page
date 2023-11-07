import { MainLayout } from "@/layouts/main-layout";
import { ProductListPage } from "@/pages/product-list-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <ProductListPage />
            }
        ]
    }
])