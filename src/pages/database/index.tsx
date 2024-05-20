import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
interface SensorData {
  sensor1: number;
  sensor2: number;
  log_start: string;
  log_end: string;
}

interface PumpData {
  log_work: number;
  liters: number;
}

interface OperationData {
  idOperation: number;
  operation: {
    log_start: string;
    log_work: number;
    log_end: string;
  };
  sensors: SensorData[];
  pump: PumpData[];
  valve: any[];
  user: any;
}

const DataBase: React.FC = () => {
  const [dataTable, setDataTable] = useState<OperationData[] | undefined>(
    undefined
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<OperationData[]>(
          "http://localhost:8080/getLogs"
        );
        setDataTable(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<OperationData[]>(
          "http://localhost:8080/getLogs"
        );
        setDataTable(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/path/to/arialmt-normal.js";
    script.async = true;

    script.onload = () => {
      console.log("Font script loaded.");
      // Здесь можно инициализировать работу со шрифтом
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const formatTime = (time: string) => {
    const date = new Date(time);
    return date.toLocaleString();
  };

  const downloadPdf = (data: OperationData) => {
    const doc = new jsPDF();

    // Подключение и использование кастомного шрифта
    doc.addFont("arialmt.ttf", "ArialMT", "normal");
    doc.setFont("ArialMT");

    doc.text(`Отчет по операции: ${data.idOperation}`, 14, 16);
    const userInfo = data.user
      ? `Пользователь: ${data.user}`
      : "Пользователь: Нет данных";
    doc.text(userInfo, 14, 24);
    doc.text(`Датчики:`, 14, 48);

    doc.setFont("ArialMT");

    const sensorsHeaders = ["Начало", "Конец", "Датчик 1", "Датчик 2"];
    const sensorsData = data.sensors.map((sensor) => [
      sensor.log_start,
      sensor.log_end,
      sensor.sensor1,
      sensor.sensor2,
    ]);

    doc.autoTable({
      head: [sensorsHeaders],
      body: sensorsData,
      startY: 52,
      styles: {
        font: "ArialMT",
      },
    });

    doc.save(`operation-${data.idOperation}.pdf`);
  };

  const data = [
    {
      idOperation: 71,
      operation: {
        log_end: "2024-05-19 15:24:27.069915",
        log_work: 5,
        log_start: "2024-05-19 15:24:21.815971",
      },
      sensors: [
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:22.517044",
          log_start: "2024-05-19 15:24:22.517044",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:22.715612",
          log_start: "2024-05-19 15:24:22.715612",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:22.929663",
          log_start: "2024-05-19 15:24:22.929663",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:23.118621",
          log_start: "2024-05-19 15:24:23.118621",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:23.320646",
          log_start: "2024-05-19 15:24:23.319643",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:23.527005",
          log_start: "2024-05-19 15:24:23.527005",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:23.726048",
          log_start: "2024-05-19 15:24:23.726048",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:23.928622",
          log_start: "2024-05-19 15:24:23.928622",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:24.11616",
          log_start: "2024-05-19 15:24:24.11616",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:24.319007",
          log_start: "2024-05-19 15:24:24.319007",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:24.523059",
          log_start: "2024-05-19 15:24:24.523059",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:24.727797",
          log_start: "2024-05-19 15:24:24.727797",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:24.916566",
          log_start: "2024-05-19 15:24:24.916566",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:25.122413",
          log_start: "2024-05-19 15:24:25.122413",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:25.329456",
          log_start: "2024-05-19 15:24:25.328455",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:25.518828",
          log_start: "2024-05-19 15:24:25.518828",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:25.721814",
          log_start: "2024-05-19 15:24:25.721814",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:25.930684",
          log_start: "2024-05-19 15:24:25.92868",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:26.11473",
          log_start: "2024-05-19 15:24:26.11473",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:26.312269",
          log_start: "2024-05-19 15:24:26.312269",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:26.519672",
          log_start: "2024-05-19 15:24:26.519672",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:26.712716",
          log_start: "2024-05-19 15:24:26.712716",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:26.916671",
          log_start: "2024-05-19 15:24:26.916671",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:27.113926",
          log_start: "2024-05-19 15:24:27.113926",
          sensor1: 1,
        },
      ],
      user: "Никита",
      pump: [
        {
          log_work: 4,
          liters: 0.3,
        },
      ],
      valve: [
        {
          log_work: 3,
        },
      ],
    },
    {
      idOperation: 71,
      operation: {
        log_end: "2024-05-19 15:24:27.069915",
        log_work: 5,
        log_start: "2024-05-19 15:24:21.815971",
      },
      sensors: [
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:22.517044",
          log_start: "2024-05-19 15:24:22.517044",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:22.715612",
          log_start: "2024-05-19 15:24:22.715612",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:22.929663",
          log_start: "2024-05-19 15:24:22.929663",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:23.118621",
          log_start: "2024-05-19 15:24:23.118621",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:23.320646",
          log_start: "2024-05-19 15:24:23.319643",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:23.527005",
          log_start: "2024-05-19 15:24:23.527005",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:23.726048",
          log_start: "2024-05-19 15:24:23.726048",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:23.928622",
          log_start: "2024-05-19 15:24:23.928622",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:24.11616",
          log_start: "2024-05-19 15:24:24.11616",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:24.319007",
          log_start: "2024-05-19 15:24:24.319007",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:24.523059",
          log_start: "2024-05-19 15:24:24.523059",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:24.727797",
          log_start: "2024-05-19 15:24:24.727797",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:24.916566",
          log_start: "2024-05-19 15:24:24.916566",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:25.122413",
          log_start: "2024-05-19 15:24:25.122413",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:25.329456",
          log_start: "2024-05-19 15:24:25.328455",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:25.518828",
          log_start: "2024-05-19 15:24:25.518828",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:25.721814",
          log_start: "2024-05-19 15:24:25.721814",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:25.930684",
          log_start: "2024-05-19 15:24:25.92868",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:26.11473",
          log_start: "2024-05-19 15:24:26.11473",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:26.312269",
          log_start: "2024-05-19 15:24:26.312269",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:26.519672",
          log_start: "2024-05-19 15:24:26.519672",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:26.712716",
          log_start: "2024-05-19 15:24:26.712716",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:26.916671",
          log_start: "2024-05-19 15:24:26.916671",
          sensor1: 1,
        },
        {
          sensor2: 1,
          log_end: "2024-05-19 15:24:27.113926",
          log_start: "2024-05-19 15:24:27.113926",
          sensor1: 1,
        },
      ],
      user: null,
      pump: [
        {
          log_work: 4,
          liters: 0.3,
        },
      ],
      valve: [],
    },
  ];

  return (
    <div className="relative overflow-x-auto">
      {data ? (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID операции
              </th>
              <th scope="col" className="px-6 py-3">
                Начало операции
              </th>
              <th scope="col" className="px-6 py-3">
                Длительность работы
              </th>
              <th scope="col" className="px-6 py-3">
                Пользователь
              </th>
              <th scope="col" className="px-6 py-3">
                Клапан
              </th>
              <th scope="col" className="px-6 py-3">
                Насос (литры/время работы)
              </th>
              <th scope="col" className="px-6 py-3">
                Данные Датчиков
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr
                key={data.idOperation}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{data.idOperation}</td>
                <td className="px-6 py-4">
                  {formatTime(data.operation.log_start)}
                </td>
                <td className="px-6 py-4">{data.operation.log_work} часов</td>
                <td className="px-6 py-4">
                  {data.user ? data.user : "Нет данных"}
                </td>
                <td className="px-6 py-4">
                  {data.valve.length > 0 ? "Открыт" : "Закрыт"}
                </td>
                <td className="px-6 py-4">
                  {data.pump
                    .map((pump) => `${pump.liters} л / ${pump.log_work} ч`)
                    .join(", ")}
                </td>
                <td className="px-6 py-4">
                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded focus:outline-none"
                    onClick={() => downloadPdf(data)}
                  >
                    Скачать
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
};

export default DataBase;
