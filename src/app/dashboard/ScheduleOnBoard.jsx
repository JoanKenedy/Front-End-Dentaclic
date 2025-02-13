export const ScheduleOnBoard = ({ citas, onSetCitas, estatus }) => {
  return (
    <article className="w-full h-full flex flex-col justify-center items-start p-4 bg-white rounded-xl shadow-button gap-3">
      <h3 className="text-xl font-semibold">Solicitudes de cita</h3>
      {citas.map((cita, index) => (
        <>
          <div className="w-full flex flex-col " key={index}>
            <div className="w-full flex justify-between items-center ">
              <div className="flex justify-center items-center flex-col">
                <img
                  className="rounded-full object-cover w-10 h-10 aspect-square "
                  alt="Foto de perfil del usuario"
                  src={cita.paciente.usuario.img}
                />
                <p className="line-clamp-2 text-ellipsis text-black whitespace-normal text-sm">
                  {cita.paciente.usuario.nombre}
                </p>
              </div>
              <p className="line-clamp-2 text-ellipsis text-black whitespace-normal text-sm text-center">
                {`${cita.dia}-${cita.mes}-${cita.year}`}
              </p>
              <p className="line-clamp-2 text-ellipsis text-black whitespace-normal">
                {cita.hora}
              </p>
              <p className="line-clamp-2 text-ellipsis text-black whitespace-normal">
                {cita.especialidad}
              </p>

              <div className="buttons flex gap-2">
                <button
                  className="p-2 bg-green-500 rounded-full text-white text-xs"
                  data-idcita={cita._id}
                  data-estatus="aceptada"
                  onClick={() => onSetCitas(cita._id, "aceptada")}
                  disabled={estatus === "aceptada"}
                >
                  Aceptar
                </button>
                <button
                  className="p-2 bg-red-500 rounded-full text-white text-xs"
                  data-idcita={cita._id}
                  data-estatus="rechazada"
                  onClick={() => onSetCitas(cita._id, "rechazada")}
                  disabled={estatus === "rechazada"}
                >
                  Rechazar
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </article>
  );
};
