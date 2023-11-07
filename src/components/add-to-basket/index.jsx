import { Button } from "@/components/button";
import { useDispatch } from "react-redux";
import { BiSolidCartAdd } from "react-icons/bi";
import { actions as basketActions } from "@/store/basket-store";

function AddToBasket({ product }) {
    const dispatch = useDispatch();
    const onClickHandle = () => {
        dispatch(basketActions.addToBasket(product));
    };
    return (
        <Button variant="outlined" onClick={onClickHandle}>
            <BiSolidCartAdd />
            &nbsp;Sepete Ekle
        </Button>
    );
}

export { AddToBasket };
