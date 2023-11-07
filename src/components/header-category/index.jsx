import { Link } from "react-router-dom";
import { categories } from "./constants";
import styles from "./styles.module.css";

function HeaderCategory() {
    return (
        <section className={`${styles.headerCategory}`}>
            {categories.map((cat) => (
                <Link key={cat.id} className={styles.categoryItem}>
                    {cat.name}
                </Link>
            ))}
        </section>
    );
}

export { HeaderCategory };
