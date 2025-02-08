import { useEffect, useState, useRef } from "react";
import { Check, Close } from "../components/icons/Icons";
export const ScheduleOnBoard = ({ specialistId, token }) => {
  const [citas, setCitas] = useState([]);
  const [estatus, setEstatus] = useState("pendiente");
  const [citaId, setCitaId] = useState(null);
  const isMounted = useRef(false);

  const user = useRef();

  const handleSetCitas = (e) => {
    setCitaId(e.currentTarget.dataset.idcita);
    setEstatus(e.currentTarget.dataset.estatus);
    console.log(estatus);
    console.log(citaId);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      user.current = JSON.parse(window.localStorage.getItem("user"));
    }
  }, []);
  console.log(user.current?.token);
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

  useEffect(() => {
    if (citaId) {
      const enpointStatusCita = process.env.NEXT_PUBLIC_API + "citas/" + citaId;
      fetch(enpointStatusCita, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-token": user.current.token,
        },
        body: JSON.stringify({
          especialista: specialistId,
          status: estatus,
        }),
      }).then((response) => {
        if (!response.ok) {
          const text = response.text();
          throw new Error(text);
        } else {
          const citasActualizadas = citas.filter((cita) => cita._id !== citaId);
          setCitas(citasActualizadas);
          return response.json();
        }
      });
    }
  }, [citaId]);
  return (
    <article className="w-full h-full flex flex-col justify-center items-start p-4 bg-white rounded-xl shadow-button gap-3">
      <h3 className="text-xl font-semibold">Solicitudes de cita</h3>
      {citas.map((cita, index) => (
        <div className="w-full flex flex-col gap-3 md:" key={index}>
          <div className="w-full flex justify-between items-center gap-2">
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
              {cita.especialidad}
            </p>
            <p className="line-clamp-2 text-ellipsis text-black whitespace-normal">
              {cita.hora}
            </p>
            <div className="buttons flex gap-2">
              <button
                className="p-2 bg-green-500 rounded-full"
                data-idcita={cita._id}
                data-estatus="aceptada"
                onClick={(e) => handleSetCitas(e)}
              >
                <Check className="w-3 text-white" />
              </button>
              <button
                className="p-2 bg-red-500 rounded-full"
                data-idcita={cita._id}
                data-estatus="rechazada"
                onClick={(e) => handleSetCitas(e)}
              >
                <Close className="w-3 text-white" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};
