import { useEffect, useState } from "react";

export default function Home(): JSX.Element {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("---------------------------");
      console.log("Start");
      try {
        const response = await fetch("http://localhost:8080/message");
        const jsonData = await response.json();
        console.log("jsonData", jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        console.log("---------------------------");
      }
      console.log("Stop");
      console.log("---------------------------");
    };

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-start justify-center flex-col mx-[25%]">
      <div className="mx-auto mb-[200px]">
        <p className="text-3xl font-bold">
          Прежде, чем пользоваться системой, изучите инструкцию в разделе
          “Инструкция”
        </p>
      </div>

      <div className="flex items-center justify-around gap-5 mx-auto w-[100%]">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="w-[40%] flex justify-center items-center">
            <div className="flex flex-col items-center gap-5">
              <p className="text-4xl font-bold text-wrap text-center">
                Для того, чтобы запустить систему, нажмите “Запуск”
              </p>
              <button className=" w-[50%] h-20 text-white text-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Запуск
              </button>
            </div>
          </div>
          <div className="w-[40%] flex justify-center items-center">
            <div className="flex flex-col items-center gap-5">
              <p className="text-4xl font-bold text-wrap text-center">
                Для того, чтобы отключить систему, нажмите “Стоп”
              </p>
              <button className="w-[50%] h-20 text-white text-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Стоп
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-auto gap-5">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-semibold">Датчик 1</p>
            <div
              className={`p-10 border-4 ${
                data == null && data == 0 ? "bg-red-400" : ""
              }`}
            >
              {data == null && data == 0 ? "РЕЗЕРВУАР НЕ ЗАПОЛНЕН" : ""}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-semibold">Датчик 2</p>
            <div
              className={`p-10 border-4 ${
                data !== null && data !== 0 ? "bg-green-400" : ""
              }`}
            >
              {data !== null && data !== 0 ? "РЕЗЕРВУАР ЗАПОЛНЕН" : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
