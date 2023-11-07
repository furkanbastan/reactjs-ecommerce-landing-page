import { Outlet } from "react-router-dom";
import * as S from "./styles";
import { Header } from "@/components/header";
import { StoreProvider } from "@/store/store-provider";
import { HeaderCategory } from "@/components/header-category";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MainLayout() {
    return (
        <StoreProvider>
            <QueryClientProvider client={queryClient}>
                <S.MainLayout className="container">
                    <Header />
                    <HeaderCategory />
                    <Outlet />
                </S.MainLayout>
            </QueryClientProvider>
        </StoreProvider>
    );
}

export { MainLayout };
