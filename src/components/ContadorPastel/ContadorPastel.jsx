import { useState } from 'react';
import styles from './contadorPastel.module.css';

const ContadorPastel = () => {
    const [rebanadas, setRebanadas] = useState(0);

    const sumar = () => setRebanadas(rebanadas + 1);

    const restar = () => {
        if (rebanadas > 0) {
            setRebanadas(rebanadas - 1);
        }
    };

    return (
        <div className={styles.contadorContainer}>
            <h3>¿Cuantas rebanadas de pastel te comerás?</h3>
            <div className={styles.controls}>
                <button className={styles.btnRestar} onClick={restar}>-</button>
                <span className={styles.numero}>{rebanadas}</span>
                <button className={styles.btnSumar} onClick={sumar}>+</button>
            </div>
            {rebanadas >= 3 && <p className={styles.mensajeRisa}>🍬 Espera guarda espacio para los dulces 🍬</p>}
        </div>
    );
};

export default ContadorPastel;
