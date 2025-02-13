"use client";

import { useState, useEffect } from "react";
import { ChevronPrev } from "../components/icons/Icons";

export const Schedule = () => {
  return (
    <article className="w-full h-full flex flex-col justify-center items-start p-4 bg-white rounded-xl shadow-button gap-3">
      <h3 className="text-xl font-semibold">Calendario</h3>
      <div className="w-full justify-center flex gap-2">
        <span>Agosto 2024</span>
        <div className="flex gap-2">
          <button onClick={() => handlePrevPage()}>
            <ChevronPrev className=" w-6 text-primaryBlue" />
          </button>
          <button onClick={() => handleNextPage()}>
            <ChevronPrev className="rotate-180 w-6 text-primaryBlue" />
          </button>
        </div>
      </div>
      <div className="w-full flex gap-2 justify-center"></div>
      <span className="w-full flex justify-center text-sm">
        Viernes 2 de agosto de 2024
      </span>
      <div className="w-full flex flex-col gap-2"></div>
    </article>
  );
};
