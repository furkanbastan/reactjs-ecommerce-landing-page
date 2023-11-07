import { Icons } from "../constants";
import styles from "./styles.module.css";

function Favorites() {
    return (
        <div className={styles.favorites}>{Icons.FavoritesICon}&nbsp;Favoriler</div>
    );
}

export { Favorites };
