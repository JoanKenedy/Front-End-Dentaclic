export const ScheduleOnBoard = ({ citas, onSetCitas }) => {
  return (
    <article className="w-full h-full flex flex-col justify-center items-start p-4 bg-white rounded-xl shadow-button gap-3">
      <h3 className="text-xl font-semibold">Solicitudes de cita</h3>
      {citas.map((cita) => (
        <div className="w-full flex flex-col" key={cita._id}>
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center flex-col">
              <img
                className="rounded-full object-cover w-10 h-10 aspect-square"
                alt="Foto de perfil del usuario"
                src={cita.paciente.usuario.img}
              />
              <p className="text-sm text-black text-center">
                {cita.paciente.usuario.nombre}
              </p>
            </div>
            <p className="text-sm text-black">{`${cita.dia}-${cita.mes}-${cita.year}`}</p>
            <p className="text-black">{cita.hora}</p>
            <p className="text-black">{cita.especialidad}</p>

            {/* Manejo de botones según el estatus */}
            {cita.status === "aceptada" ? (
              <div className="buttons flex gap-2">
                <button
                  className="p-2 bg-green-500 rounded-full text-white text-xs"
                  disabled
                >
                  Aceptada
                </button>
              </div>
            ) : cita.status === "rechazada" ? (
              <div className="buttons flex gap-2">
                <button
                  className="p-2 bg-red-500 rounded-full text-white text-xs"
                  disabled
                >
                  Rechazada
                </button>
              </div>
            ) : (
              <div className="buttons flex gap-2">
                <button
                  className="p-2 bg-green-500 rounded-full text-white text-xs"
                  onClick={() => onSetCitas(cita._id, "aceptada")}
                >
                  Aceptar
                </button>
                <button
                  className="p-2 bg-red-500 rounded-full text-white text-xs"
                  onClick={() => onSetCitas(cita._id, "rechazada")}
                >
                  Rechazar
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </article>
  );
};
