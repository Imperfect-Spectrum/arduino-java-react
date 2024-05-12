import { useEffect, useState } from "react";

export default function Home(): JSX.Element {
  const [data, setData] = useState<{
    switch1: number;
    switch2: number;
    pump: number;
    valve: number;
  }>({
    switch1: 0,
    switch2: 0,
    pump: 0,
    valve: 0,
  });

  const [start, setStart] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("---------------------------");
      console.log("Start");
      try {
        if (start == true) {
          const response = await fetch("http://localhost:8080/message");
          const jsonData = await response.json();
          console.log("jsonData", jsonData);
          setData((prevData) => ({ ...prevData, ...jsonData }));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      console.log("Stop");
      console.log("---------------------------");
    };

    const interval = setInterval(fetchData, 2000);

    return () => clearInterval(interval);
  }, [start]);

  return (
    <div className="flex items-start justify-center flex-col mx-[25%]">
      <div className="mx-auto mb-[50px]">
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
              <button
                className=" w-[50%] h-20 text-white text-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => {
                  fetch("http://localhost:8080/startOperation", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({}),
                  })
                    .then((response) => {
                      if (!response.ok) {
                        throw new Error("Network response was not ok");
                      }
                      return response.json();
                    })
                    .then((data) => {
                      console.log("Start operation response:", data);
                      setStart(true);
                    })
                    .catch((error) => {
                      console.error(
                        "There was a problem with the start operation:",
                        error
                      );
                    });
                }}
              >
                Запуск
              </button>
            </div>
          </div>
          <div className="w-[40%] flex justify-center items-center">
            <div className="flex flex-col items-center gap-5">
              <p className="text-4xl font-bold text-wrap text-center">
                Для того, чтобы отключить систему, нажмите “Стоп”
              </p>
              <button
                className="w-[50%] h-20 text-white text-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => {
                  fetch("http://localhost:8080/endOperation", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({}),
                  })
                    .then((response) => {
                      if (!response.ok) {
                        throw new Error("Network response was not ok");
                      }
                      return response.json();
                    })
                    .then((data) => {
                      console.log("Start operation response:", data);
                      setStart(false);
                    })
                    .catch((error) => {
                      console.error(
                        "There was a problem with the start operation:",
                        error
                      );
                    });
                }}
              >
                Стоп
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-auto gap-5">
          <div className="flex flex-col items-center w-[100%]">
            <p className="text-2xl font-semibold">Датчик 1</p>
            <div
              className={`p-10 border-4 w-[100%] text-center font-semibold rounded-2xl ${
                data.switch1 !== null && data.switch1 !== 0
                  ? "bg-green-400"
                  : "bg-red-400"
              }`}
            >
              {data.switch1 !== null && data.switch1 !== 0
                ? "Резервуар заполнен"
                : "Резервуар не заполнен"}
            </div>
          </div>

          <div className="flex flex-col items-center w-[100%]">
            <p className="text-2xl font-semibold">Датчик 2</p>
            <div
              className={`p-10 border-4 w-[100%] text-center font-semibold rounded-2xl ${
                data.switch2 !== null && data.switch2 !== 0
                  ? "bg-green-400"
                  : "bg-red-400"
              }`}
            >
              {data.switch2 !== null && data.switch2 !== 0
                ? "Резервуар заполнен"
                : "Резервуар не заполнен"}
            </div>
          </div>

          <div className="flex flex-col items-center w-[100%]">
            <p className="text-2xl font-semibold">Помпа</p>
            <div
              className={`p-10 border-4 w-[100%] text-center font-semibold rounded-2xl ${
                data.pump !== null && data.pump !== 0
                  ? "bg-green-400"
                  : "bg-red-400"
              }`}
            >
              {data.pump !== null && data.pump !== 0
                ? "Помпа включена"
                : "Помпа выключена"}
            </div>
          </div>

          <div className="flex flex-col items-center w-[100%]">
            <p className="text-2xl font-semibold">Клапан</p>
            <div
              className={`p-10 border-4 w-[100%] text-center font-semibold rounded-2xl ${
                data.valve !== null && data.valve !== 0
                  ? "bg-green-400"
                  : "bg-red-400"
              }`}
            >
              {data.valve !== null && data.valve !== 0
                ? "Клапан включен"
                : "Клапан выключен"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
