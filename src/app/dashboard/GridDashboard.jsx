"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { LoginContext } from "@/context/login";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { toast } from "sonner";
import { ScheduleOnBoard } from "./ScheduleOnBoard";
import { Publication } from "./Publication";
import { Schedule } from "./Schedule";

import { Chat } from "./Chat";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridDashboard = () => {
  const { userData} = useContext(LoginContext);
  const [isDraggable, setIsDraggable] = useState(false);
  const [width, setWidth] = useState(100);
  const [citas, setCitas] = useState([]);
  const [citaId, setCitaId] = useState(null);
  const [estatus, setEstatus] = useState("pendiente");
  const user = useRef();
  const savedLayout = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      user.current = JSON.parse(window.localStorage.getItem("user"));
    }
  }, []);

  const handleSetCitas = (citaId, estatus) => {
    setCitaId(citaId);
    setEstatus(estatus);
  };

  console.log(userData);
  console.log(process.env.NEXT_PUBLIC_API + "citas/doctor/" + userData?._id);
  useEffect(() => {
    if (userData?._id) {
      const endpointCitas =
        process.env.NEXT_PUBLIC_API + "citas/doctor/" + userData?._id;
      fetch(endpointCitas, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setCitas(data.citasEspeciaslita))
        .catch((error) => console.log("Error", error));
    }
  }, [userData?._id]);
  console.log(citas);
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
          especialista: userData?._id,
          status: estatus,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            const text = response.text();
            throw new Error(text);
          } else {
            
            setCitas(citas);
            localStorage.setItem("citas", JSON.stringify(citas));
            return response.json();
          }
        })
        .catch((error) => {
          console.error("Error al actualizar el estatus de la cita:", error);
        });
    }
  }, [citaId, estatus, citas]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      savedLayout.current = window.localStorage.getItem("dashboardLayout");
    }
  }, []);

  const getInitialLayout = () => {
    if (savedLayout.current) {
      return JSON.parse(savedLayout.current);
    } else {
      return {
        lg: [
          { i: "ScheduleOnBoard", x: 4, y: 4, w: 6, h: 5 },
          { i: "publication", x: 0, y: 0, w: 3, h: 4 },
          { i: "Schedule", x: 3, y: 0, w: 2, h: 8 },

          { i: "Chat", x: 0, y: 1, w: 4, h: 8 },
        ],
        md: [
          { i: "ScheduleOnBoard", x: 0, y: 0, w: 7, h: 5 },

          { i: "Schedule", x: 7, y: 0, w: 5, h: 8 },
          { i: "publication", x: 0, y: 4, w: 2, h: 4 },
          { i: "Chat", x: 4, y: 5, w: 2, h: 8 },
        ],
        sm: [
          { i: "ScheduleOnBoard", x: 0, y: 0, w: 2, h: 5 },
          { i: "publication", x: 0, y: 26, w: 6, h: 4 },
          { i: "Schedule", x: 0, y: 4, w: 2, h: 8 },

          { i: "Chat", x: 0, y: 18, w: 2, h: 8 },
        ],
        xs: [
          { i: "ScheduleOnBoard", x: 0, y: 0, w: 12, h: 5 },
          { i: "publication", x: 0, y: 23, w: 12, h: 5 },
          { i: "Schedule", x: 0, y: 4, w: 12, h: 8 },

          { i: "Chat", x: 0, y: 18, w: 12, h: 8 },
        ],
        xxs: [
          { i: "ScheduleOnBoard", x: 0, y: 0, w: 6, h: 5 },
          { i: "publication", x: 0, y: 26, w: 6, h: 4 },
          { i: "Schedule", x: 0, y: 4, w: 6, h: 8 },
          { i: "Chat", x: 0, y: 18, w: 6, h: 8 },
        ],
      };
    }
  };

  const [layouts, setLayouts] = useState(getInitialLayout());

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 375) {
        setWidth(320);
      }
      if (window.innerWidth >= 425 && window.innerWidth < 768) {
        setWidth(425);
      }
      if (window.innerWidth >= 768 && window.innerWidth < 996) {
        setWidth(650);
      }
      if (window.innerWidth >= 996 && window.innerWidth < 1200) {
        setWidth(1000);
      }
      if (window.innerWidth >= 1200 && window.innerWidth < 1300) {
        setWidth(1200);
      }
      if (window.innerWidth >= 1300) {
        setWidth(1200);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSaveLayout = () => {
    window.localStorage.setItem("dashboardLayout", JSON.stringify(layouts));
    setIsDraggable(false);
  };

  const onLayoutChange = (newLayout, newLayouts) => {
    setLayouts(newLayouts);
  };

  const handleDragLayout = () => {
    setIsDraggable(true);
    toast.info("Puedes personalizar el tamaño de las tarjetas", {
      description:
        "Arrastra o cambia de tamaño las tarjetas para personalizar tu dashboard, para guardar da click en el botón.",
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full md:max-w-6xl justify-end items-end relative hidden lg:flex">
        <button
          onClick={isDraggable ? handleSaveLayout : handleDragLayout}
          className="hidden px-4 py-2 bg-white border absolute -top-20 right-8 rounded-lg lg:block xl:right-7"
        >
          {isDraggable ? "Guardar" : "Personalizar Dashboard"}
        </button>
      </div>
      <div className="w-full flex justify-center items-center md:max-w-6xl ">
        <div className="w-[1000px] md:w-full m-auto flex justify-center">
          <ResponsiveGridLayout
            className="layout select-none flex justify-center w-full lg:block"
            layouts={layouts}
            autoSize
            rowHeight={30}
            width={width}
            containerWidth={width}
            margin={[15, 15]}
            isDraggable={isDraggable}
            isResizable={isDraggable}
            breakpoints={{ lg: 1400, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 4 }}
            onLayoutChange={onLayoutChange}
          >
            <div
              key="ScheduleOnBoard"
              className={`relative ${isDraggable ? "cursor-grab" : ""}`}
            >
              <div
                className={`absolute z-10 bg-blue-400/40 rounded-xl w-full h-full ${
                  isDraggable ? "inline-block" : "hidden"
                }`}
              />
              <ScheduleOnBoard citas={citas} onSetCitas={handleSetCitas} />
            </div>
            <div
              key="publication"
              className={`relative ${isDraggable ? "cursor-grab" : ""}`}
            >
              <div
                className={`absolute z-10 bg-blue-400/40 rounded-xl w-full h-full ${
                  isDraggable ? "inline-block" : "hidden"
                }`}
              />
              <Publication />
            </div>
            <div
              key="Schedule"
              className={`relative ${isDraggable ? "cursor-grab" : ""}`}
            >
              <div
                className={`absolute z-10 bg-blue-400/40 rounded-xl w-full h-full ${
                  isDraggable ? "inline-block" : "hidden"
                }`}
              />
              <Schedule specialistId={userData?._id} />
            </div>

            <div
              key="Chat"
              className={`relative ${isDraggable ? "cursor-grab" : ""}`}
            >
              <div
                className={`absolute z-10 bg-blue-400/40 rounded-xl w-full h-full ${
                  isDraggable ? "inline-block" : "hidden"
                }`}
              />
              <Chat />
            </div>
          </ResponsiveGridLayout>
        </div>
      </div>
    </div>
  );
};

export default GridDashboard;
