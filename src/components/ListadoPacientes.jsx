import {useEffect} from "react";
import Pacientes from "./Pacientes.jsx";

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-10">Administra tus {" "}
                        <span className="text-indigo-600 font-bold">Pacientes y citas</span>
                    </p>
                    {pacientes.map(paciente => (
                        <Pacientes
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}/>
                    ))}
                </>
            ) : (
                    <>
                        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                        <p className="text-lg mt-5 text-center mb-10">Comienza agregando pacientes{" "}
                            <span className="text-indigo-600 font-bold">y aparecerán acá</span>
                        </p>
                    </>
                )}
                < /div>
                )
            }

            export default ListadoPacientes;