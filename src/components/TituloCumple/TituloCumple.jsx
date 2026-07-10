import styles from './tituloCumple.module.css';

const TituloCumple = () => {
    return (
        <div className={styles.tituloContainer}>
            <h1 className={styles.mainTitle}>Cumpleaños de Edwin</h1>
            <p className={styles.subTitle}>Estás invitado a la mejor fiesta del año</p>
        </div>
    );
};

export default TituloCumple;
