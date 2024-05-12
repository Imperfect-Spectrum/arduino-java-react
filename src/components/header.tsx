import { GlassWater } from "lucide";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  return (
    <div className="h-30 flex items-center justify-center gap-x-96 border-b-4 mb-16 bg-white">
      <div className="flex items-center justify-center gap-5">
        <Image src="/logo.png" width={80} height={80} alt="Logo" />
        <h1 className="text-4xl font-bold">АкваГард</h1>
      </div>
      <div className="flex justify-between items-center gap-20">
        <a
          href=""
          className="text-2xl block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Главная
        </a>
        <a
          target="_blank"
          href="/about"
          className="text-2xl block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          О нас
        </a>
        <a
          target="_blank"
          href="/instruction"
          className="text-2xl block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Инструкция
        </a>
        <a
          target="_blank"
          href="/database"
          className="text-2xl block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          ДатаБаза
        </a>
      </div>
    </div>
  );
}
