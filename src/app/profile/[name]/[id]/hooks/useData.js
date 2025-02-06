"use client";

import { useFetch } from "@/hooks/useFetch";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useData() {
  const [activeMenu, setActiveMenu] = useState("1");
  const [showSchedule, setShowSchedule] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [specialties, setSpecialties] = useState("");
  const pathname = usePathname();
  const params = pathname.split("/");
  const id = params[3];
  // const router = useRouter()

  const getUserEndpoint =
    process.env.NEXT_PUBLIC_API + "buscar/especialistas/" + id;
  const { data, loading, error } = useFetch(getUserEndpoint);

  const getKeywords = () => {
    if (data.especialista.especialidades) {
      const specialties = data.especialista.especialidades.toString();
      setSpecialties(specialties);
    }
  };

  useEffect(() => {
    if (data.especialista) {
      setProfileData(data.especialista);
      getKeywords();
    }
  }, [data]);

  return {
    activeMenu,
    setActiveMenu,
    showSchedule,
    setShowSchedule,
    profileData,
    setProfileData,
    specialties,
    setSpecialties,
    data,
    loading,
    error,
  };
}
