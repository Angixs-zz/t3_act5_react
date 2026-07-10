import styles from "./sugerenciaRegalo.module.css";

const SugerenciaRegalo = ({ regalo, precio, tienda }) => {
    return (
        <div className={styles.regaloCard}>
            <h3>{regalo}</h3>
            <p className={styles.precio}>
                Precio aprox: <span>{precio}</span>
            </p>
            <p className={styles.tienda}>Disponible en: {tienda}</p>
        </div>
    );
};

export default SugerenciaRegalo;
