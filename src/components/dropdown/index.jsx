import { useEffect, useState } from "react";
import * as S from "./styles";

function Dropdown({ align = "left", title, children }) {
    const [toggle, setToggle] = useState(false);

    return (
        <S.Dropdown
            onMouseOver={() => setToggle(true)}
            onMouseOut={() => setToggle(false)}
        >
            <div>{title}</div>
            {toggle && (
                <S.Item id="dropdown" $align={align}>
                    {children}
                </S.Item>
            )}
        </S.Dropdown>
    );
}

export { Dropdown };

/**
ekranın başka tarafına tıkladığında kapatan kod

useEffect(() => {
        const onClickDownHandle = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target))
                setOpen(false);
        };

        document.addEventListener("click", onClickDownHandle, true);

        return () => {
            document.removeEventListener("click", onClickDownHandle, true);
        };
    }, [dropdownRef]);

 */
