import React from "react";

const Instructions: React.FC = () => {
  return (
    <div className="flex items-start justify-center flex-col mx-[25%] rounded shadow-lg p-10">
      <h1 className="text-2xl font-bold mb-4">
        Инструкция по использованию интерфейса &quot;АкваГард&quot;
      </h1>
      <ol className="list-decimal ml-6">
        <li className="mb-4">
          <div className="font-bold">Старт системы:</div>
          <p>
            Нажмите кнопку{" "}
            <span className="text-blue-500">&quot;Старт&quot;</span>, чтобы
            запустить систему &quot;АкваГард&quot;. После нажатия кнопки система
            начнет свою работу.
          </p>
        </li>
        <li className="mb-4">
          <div className="font-bold">Отображение показателей датчиков:</div>
          <p>
            На главной странице интерфейса отображаются показания датчиков,
            расположенных в резервуарах. Вы сможете видеть текущие значения
            температуры, уровня воды и других важных параметров.
          </p>
        </li>
        <li className="mb-4">
          <div className="font-bold">Состояние работы помпы и клапана:</div>
          <p>
            На главной странице также отображается состояние работы помпы и
            клапана. Вы сможете мониторить, включена ли помпа, и открыт ли
            клапан в данный момент.
          </p>
        </li>
        <li className="mb-4">
          <div className="font-bold">Остановка системы:</div>
          <p>
            Для остановки системы нажмите кнопку{" "}
            <span className="text-red-500">&quot;Стоп&quot;</span>. После
            нажатия кнопки система завершит свою работу и перейдет в состояние
            ожидания.
          </p>
        </li>
        <li className="mb-4">
          <div className="font-bold">Логирование:</div>
          <p>
            Для доступа к журналу логирования перейдите на вкладку{" "}
            <span className="text-purple-500">&quot;БазаДанных&quot;</span>. Вы
            сможете ознакомиться с ID операции, началом и концом операции, а
            также временем работы системы.
          </p>
        </li>
      </ol>

      <div className="mt-8">
        <div className="font-bold">Важно:</div>
        <p className="mt-2">
          Убедитесь, что перед началом работы системы все необходимые проверки и
          подготовительные мероприятия выполнены. В случае возникновения проблем
          или аварийной ситуации немедленно обратитесь к ответственному
          специалисту.
        </p>
      </div>
    </div>
  );
};

export default Instructions;
