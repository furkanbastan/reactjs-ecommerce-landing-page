import { Dropdown } from "@/components/dropdown";
import * as S from "./styles";
import { Icons } from "../constants";
import { Button } from "@/components/button";

function Login() {
    return (
        <S.Login>
            <Dropdown
                align="center"
                title={
                    <S.LoginTitle>
                        {Icons.LoginIcon}&nbsp;Giriş Yap
                    </S.LoginTitle>
                }
            >
                <S.LoginBody>
                    <Button variant="primary">Giriş Yap</Button>
                    <Button variant="primary">Üye Ol</Button>
                </S.LoginBody>
            </Dropdown>
        </S.Login>
    );
}

export { Login };
