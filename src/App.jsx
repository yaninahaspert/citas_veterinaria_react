import React from "react";
import {useState, useEffect} from "react";
import Header from "./components/Header.jsx"
import Formulario from "./components/Formulario.jsx";
import ListadoPacientes from "./components/ListadoPacientes.jsx";

const App = () => {

    const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? [])
    const [paciente, setPaciente] = useState({})

    useEffect(() => {
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
    }, [pacientes])

    const eliminarPaciente = (id) => {
        const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
        setPacientes(pacientesActualizados)
    }

    return (
        <div className="container mx-auto mt-20">
            <Header
            ></Header>
            <div className="mt-12 flex">
                <Formulario
                    paciente={paciente}
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    setPaciente={setPaciente}></Formulario>
                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                ></ListadoPacientes>
            </div>
        </div>
    )
}
export default App;