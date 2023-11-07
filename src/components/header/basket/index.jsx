import { Icons } from "../constants";
import { Dropdown } from "@/components/dropdown";
import { useSelector } from "react-redux";
import * as S from "./styles";

function Basket() {
    const basket = useSelector((state) => state.basket.basket);
    const totalAmount = basket.reduce((acc, product) => acc + product.price, 0);

    return (
        <S.Basket>
            <Dropdown
                align="center"
                title={
                    <S.BasketTitle>
                        {Icons.BasketIcon}&nbsp;Sepetim
                    </S.BasketTitle>
                }
            >
                <S.BasketDetail>
                    Toplam Tutar: {totalAmount.toFixed(2)}
                </S.BasketDetail>
            </Dropdown>
        </S.Basket>
    );
}

export { Basket };
