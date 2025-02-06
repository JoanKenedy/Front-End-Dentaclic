import { useEffect, useState, useRef } from "react";
export const ScheduleOnBoard = ({ specialistId }) => {
  const [citas, setCitas] = useState([]);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    if (specialistId) {
      const endpointCitas =
        process.env.NEXT_PUBLIC_API + "citas/doctor/" + specialistId;

      fetch(endpointCitas)
        .then((response) => response.json())
        .then((data) => {
          if (isMounted.current) {
            console.log("Datos de citas:", data);
            setCitas(data.citasEspeciaslita || []);
          }
        })
        .catch((error) => {
          if (isMounted.current) {
            console.error("Error fetching citas:", error);
          }
        });
    }
  }, [specialistId]);

  console.log(citas);
  return (
    <article className="w-full h-full flex flex-col justify-center items-start p-4 bg-white rounded-xl shadow-button gap-3">
      <h3 className="text-xl font-semibold">Solicitud de cita</h3>
      {citas.map((cita, index) => (
        <div className="w-full flex flex-col gap-3" key={index}>
          <div className="w-full flex justify-between items-center gap-2">
            <img
              className="rounded-full object-cover w-10 h-10 aspect-square"
              alt="Foto de perfil del usuario"
              src={cita.paciente.usuario.img}
            />
            <p className="line-clamp-2 text-ellipsis text-black whitespace-normal">
              {cita.hora}
            </p>
            <button className="px-2 py-1 rounded-full bg-primaryBlue text-white text-sm">
              {" "}
              Aceptar{" "}
            </button>
          </div>
        </div>
      ))}
    </article>
  );
};
