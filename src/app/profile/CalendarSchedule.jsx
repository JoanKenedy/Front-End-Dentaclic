import { useRef, useState, useContext, useEffect } from "react";
import { CalendarMonth } from "@/app/components/icons/Icons";
import { SelectLocation } from "./SelectLocation";
import { SelectSpecialty } from "./SelectSpecialty";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { LoginContext } from "@/context/login";

import { toast } from "sonner";

export const CalendarSchedule = ({
  showSchedule,
  setShowSchedule,
  loading,
  profileData,
  isProfile,
}) => {
  return !loading || profileData ? (
    <InfoCalendar
      profileData={profileData}
      showSchedule={showSchedule}
      setShowSchedule={setShowSchedule}
      isProfile={isProfile}
    />
  ) : (
    ""
  );
};

export const InfoCalendar = ({
  showSchedule,
  setShowSchedule,
  profileData,
  isProfile,
}) => {
  const user = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      user.current = JSON.parse(window.localStorage.getItem("user"));
    }
  }, []);
  // Estados para capturar selecciones
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedEspeciality, setSelectedEspeciality] = useState("");
  const [isAlert, setIsAlert] = useState(false);

  // Manejadores de eventos
  const { userData } = useContext(LoginContext);

  const handleMonthChange = (e) => setSelectedMonth(e.target.value);
  const handleDaySelect = (day) => setSelectedDay(day);
  const handleTimeSelect = (time) => setSelectedTime(time);

  const handleEspecialtySelect = (specialty) => {
    setSelectedEspeciality(specialty);
  };
  // Función para subir los datos a la base de datos
  const handleSubmit = async () => {
    if (
      !selectedMonth ||
      !selectedDay ||
      !selectedTime ||
      !selectedEspeciality
    ) {
      toast.error("Por favor, selecciona mes, día, hora y especialidad.");
      return;
    }

    const appointmentData = {
      year: new Date().getFullYear(),
      month: parseInt(selectedMonth, 10),
      day: selectedDay,
      specialty: selectedEspeciality,
      time: selectedTime,
      specialist: profileData?._id,
      paciente: userData?._id,
    };
    console.log(userData);
    console.log(appointmentData);

    try {
      const API_BASE = process.env.NEXT_PUBLIC_API;
      if (!API_BASE) {
        console.error("Error: NEXT_PUBLIC_API no está definido");
        toast.error("Error de configuración en la API.");
        return;
      }

      const endpointCreateCitas = `${API_BASE}citas/`;

      const response = await fetch(endpointCreateCitas, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-token": user.current.token,
        },
        body: JSON.stringify({
          year: appointmentData.year,
          dia: appointmentData.day,
          mes: appointmentData.month,
          especialidad: appointmentData.specialty,
          hora: appointmentData.time,
          especialista: appointmentData.specialist,
          paciente: appointmentData.paciente,
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Error en la solicitud:", errorResponse);
        toast.error(
          "Error al agendar la cita: " +
            (errorResponse.message || "No autorizado.")
        );

        return;
      }

      toast.success("Cita agendada con éxito.");
      setShowSchedule(false);
      setIsAlert(true);
      setTimeout(() => {
        window.location.href = "/profile-patient";
      }, 2000);
    } catch (error) {
      console.error("Error al agendar la cita:", error);
      toast.error("Hubo un problema al agendar la cita.");
    }
  };

  const handleClickOutsideFn = () => setShowSchedule(false);
  const selectElement = useRef(null);
  useOnClickOutside(selectElement, handleClickOutsideFn);

  const mesConTreinta = ["04", "06", "09", "11"];
  const mesConVeiteOcho = "02";
  const mesConTreintaUno = ["01", "03", "05", "07", "08", "10", "12"];

  const getDayInMonth = (month) => {
    if (mesConTreinta.includes(month)) return 30;
    if (mesConTreintaUno.includes(month)) return 31;
    if (month === mesConVeiteOcho) return 28;
    return 0;
  };

  const dayInMonth = getDayInMonth(selectedMonth);
  return (
    <aside
      ref={selectElement}
      className={`w-11/12 flex flex-col bg-white dark:bg-darkColor dark:text-white shadow-xl rounded-xl gap-3 pb-4 transition origin-bottom-right fixed z-10 right-1/2 translate-x-1/2 bottom-28 ${
        showSchedule ? "scale-100" : "scale-0"
      } lg:scale-100 lg:sticky lg:translate-x-0 lg:right-0 ${
        isProfile ? "lg:top-10 lg:mt-0" : "lg:top-20 lg:mt-32"
      }  lg:max-w-96 lg:h-max lg:bottom-0`}
    >
      <span className="flex gap-2 text-white bg-blue-500 px-4 py-2 rounded-t-xl">
        <CalendarMonth className="w-6 h-6" /> Agendar Cita
      </span>

      <article className="w-full px-4">
        <SelectLocation profileData={profileData} />
      </article>
      <article className="w-full px-4">
        <SelectSpecialty
          profileData={profileData}
          onEspecialtyChange={handleEspecialtySelect}
        />
      </article>
      <article className="px-4">
        <div className="w-full grid grid-cols-7 gap-4">
          {/* Selección de Mes */}
          <section className="flex flex-col justify-center items-center col-span-7">
            <header className="flex flex-col justify-center items-center mb-2">
              <span>Año en curso {new Date().getFullYear()}</span>

              <span className="text-center text-xs">Seleccionar Mes</span>

              <select
                className="text-xs px-2 py-1 border rounded-md"
                onChange={handleMonthChange}
                value={selectedMonth}
              >
                <option value="">Seleccione un mes</option>
                <option value="01">Enero</option>
                <option value="02">Febrero</option>
                <option value="03">Marzo</option>
                <option value="04">Abril</option>
                <option value="05">Mayo</option>
                <option value="06">Junio</option>
                <option value="07">Julio</option>
                <option value="08">Agosto</option>
                <option value="09">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
              </select>
            </header>
          </section>

          {/* Selección de Día */}
          {selectedMonth ? (
            <section className="flex flex-wrap justify-center col-span-7">
              <header className="flex flex-col justify-center items-center mb-2 w-full">
                <span className="text-center text-xs">Seleccionar Día</span>
              </header>
              <div className="grid grid-cols-7 gap-2">
                <div className="text-center">D</div>
                <div className="text-center">L</div>
                <div className="text-center">M</div>
                <div className="text-center">M</div>
                <div className="text-center">J</div>
                <div className="text-center">V</div>
                <div className="text-center">S</div>
                {Array.from({ length: dayInMonth }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 flex justify-center items-center border rounded-md text-xs ${
                      selectedDay === index + 1 ? "bg-blue-300 text-white" : ""
                    }`}
                    onClick={() => handleDaySelect(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </section>
          ) : (
            ""
          )}

          {/* Selección de Hora */}
          <section className="flex flex-col justify-center items-center col-span-7 mt-4">
            <header className="flex flex-col justify-center items-center mb-2">
              <span className="text-center text-xs">Seleccionar Hora</span>
            </header>
            <div className="flex flex-wrap justify-center gap-2">
              {["10:00", "12:00", "14:00", "16:00", "18:00"].map((time) => (
                <button
                  key={time}
                  className={`px-2 py-1 rounded-md text-xs ${
                    selectedTime === time
                      ? "bg-blue-500 text-white"
                      : "bg-blue-300 text-white"
                  }`}
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* Botón para enviar datos */}
      <div className="px-4 mt-0">
        <button
          onClick={handleSubmit}
          className="w-full ${
          bg-green-500
            text-white px-4 py-2 rounded-md"
        >
          {isAlert ? "Se ha enviado tu solicitud de cita" : "Solicitar cita"}
        </button>
      </div>
    </aside>
  );
};
