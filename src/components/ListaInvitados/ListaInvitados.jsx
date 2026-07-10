import { useState } from "react";
import { SquarePen, Trash } from "lucide-react";
import styles from "./listaInvitados.module.css";

const ListaInvitados = () => {

    // arreglo inicial de invitados
    const [invitados, setInvitados] = useState([
        {
            id: "1",
            nombre: "Miguel",
            confirmado: true
        },
        {
            id: "2",
            nombre: "Yareli",
            confirmado: true
        },
        {
            id: "3",
            nombre: "Meli",
            confirmado: true
        },
        {
            id: "4",
            nombre: "Paco",
            confirmado: false
        }
    ]);

    // estado para guardar el nombre del nuevo invitado
    const [nuevoInvitado, setNuevoInvitado] = useState("");

    // estado para saber que invitado se esta editando
    const [invitadoEditandoId, setInvitadoEditandoId] = useState(null);

    // estado para guardar el nuevo nombre durante la edicion
    const [nombreEditado, setNombreEditado] = useState("");


    // funcion para agregar un invitado
    const agregarInvitado = (evento) => {
        evento.preventDefault();

        let nombreLimpio = nuevoInvitado.trim();

        if (nombreLimpio === "") {
            alert("Escribe el nombre del invitado");
            return;
        }

        let invitadoNuevo = {
            id: crypto.randomUUID(),
            nombre: nombreLimpio,
            confirmado: false
        };

        let invitadosActualizados = [...invitados, invitadoNuevo];

        setInvitados(invitadosActualizados);
        setNuevoInvitado("");
    };


    // funcion para eliminar un invitado
    const eliminarInvitado = (idInvitado) => {

        let invitadosActualizados = invitados.filter(function (invitado) {
            return invitado.id !== idInvitado;
        });

        setInvitados(invitadosActualizados);
    };


    // funcion para confirmar o cancelar la asistencia
    const cambiarConfirmacion = (idInvitado) => {

        let invitadosActualizados = invitados.map(function (invitado) {

            if (invitado.id === idInvitado) {
                return {
                    ...invitado,
                    confirmado: !invitado.confirmado
                };
            }

            return invitado;
        });

        setInvitados(invitadosActualizados);
    };


    // funcion para comenzar a editar
    const iniciarEdicion = (invitado) => {
        setInvitadoEditandoId(invitado.id);
        setNombreEditado(invitado.nombre);
    };


    // funcion para guardar el nombre editado
    const guardarEdicion = (evento, idInvitado) => {
        evento.preventDefault();

        let nombreLimpio = nombreEditado.trim();

        if (nombreLimpio === "") {
            alert("El nombre no puede quedar vacio");
            return;
        }

        let invitadosActualizados = invitados.map(function (invitado) {

            if (invitado.id === idInvitado) {
                return {
                    ...invitado,
                    nombre: nombreLimpio
                };
            }

            return invitado;
        });

        setInvitados(invitadosActualizados);
        setInvitadoEditandoId(null);
        setNombreEditado("");
    };


    // funcion para cancelar la edicion
    const cancelarEdicion = () => {
        setInvitadoEditandoId(null);
        setNombreEditado("");
    };


    return (
        <div className={styles.listaContainer}>

            <h2 className={styles.tituloLista}>
                📝 Lista VIP de Invitados
            </h2>

            <form
                onSubmit={agregarInvitado}
                className={styles.formInvitado}
            >
                <input
                    type="text"
                    placeholder="Nombre del invitado..."
                    value={nuevoInvitado}
                    onChange={function (evento) {
                        setNuevoInvitado(evento.target.value);
                    }}
                    className={styles.inputInvitado}
                />

                <button
                    type="submit"
                    className={styles.btnAgregar}
                >
                    Agregar
                </button>
            </form>

            <ul className={styles.ulInvitados}>

                {invitados.map(function (invitado) {

                    return (
                        <li
                            key={invitado.id}
                            className={styles.liInvitado}
                        >
                            <span>
                                {invitado.nombre}

                                {invitado.confirmado ? " ✅" : " ⏳"}
                            </span>

                            <div className={styles.iconsContainer}>

                                <button
                                    type="button"
                                    className={styles.actionButton}
                                    onClick={function () {
                                        cambiarConfirmacion(invitado.id);
                                    }}
                                >
                                    {invitado.confirmado
                                        ? "Cancelar"
                                        : "Confirmar"}
                                </button>

                                <SquarePen
                                    onClick={function () {
                                        iniciarEdicion(invitado);
                                    }}
                                    size={26}
                                />

                                <Trash
                                    onClick={function () {
                                        eliminarInvitado(invitado.id);
                                    }}
                                    size={26}
                                />

                            </div>

                            {invitadoEditandoId === invitado.id && (

                                <form
                                    onSubmit={function (evento) {
                                        guardarEdicion(
                                            evento,
                                            invitado.id
                                        );
                                    }}
                                    className={styles.editForm}
                                >

                                    <input
                                        type="text"
                                        value={nombreEditado}
                                        onChange={function (evento) {
                                            setNombreEditado(
                                                evento.target.value
                                            );
                                        }}
                                        className={styles.editInput}
                                    />

                                    <button
                                        type="submit"
                                        className={styles.saveButton}
                                    >
                                        Guardar
                                    </button>

                                    <button
                                        type="button"
                                        className={styles.cancelButton}
                                        onClick={cancelarEdicion}
                                    >
                                        Cancelar
                                    </button>

                                </form>
                            )}

                        </li>
                    );
                })}

            </ul>

        </div>
    );
};

export default ListaInvitados;