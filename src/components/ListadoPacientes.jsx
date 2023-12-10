
import Pacientes from "./Pacientes"


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return (

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (

                <>
                    <h2 className="font-black text-3xl text-center ">Listado Pacientes</h2>

                    <p className="text-3xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-700">Pacientes y Citas</span>
                    </p>
                    
                    {pacientes.map(paciente => (
                            <Pacientes
                            key = {paciente.id}
                            paciente={paciente}
                            setPaciente= {setPaciente}
                            eliminarPaciente = {eliminarPaciente}
                            />
                        ))}
                </>
                ) : (
                <>
                    <h2 className="font-black text-3xl text-center ">No hay Pacientes</h2>

                        <p className="text-3xl mt-5 mb-10 text-center">
                            Agrega pacientes {''}
                            <span className="text-indigo-700">y aparecerán aqui</span>
                        </p>
                </>
            )}  
        </div>
    )
}

export default ListadoPacientes