import { Basket } from "./basket";
import { LogoDetail } from "./constants";
import { Favorites } from "./favorites";
import { Login } from "./login";
import { Profile } from "./profile";
import * as S from "./styles";

function Header() {
    return (
        <S.Header className="fluid container">
            <S.HeaderWrapper>
                <S.Logo>
                    <div>{LogoDetail.title}</div>
                    <img src={LogoDetail.image} alt="" />
                </S.Logo>
                <S.Search>
                    <input
                        type="text"
                        placeholder="Write category, brand or product you are looking for"
                    />
                </S.Search>

                <S.Navbar>
                    <Login />
                    <Favorites />
                    <Basket />
                    <Profile/>
                </S.Navbar>
            </S.HeaderWrapper>
        </S.Header>
    );
}

export { Header };
