import { useEffect, useState } from "react";
import io from "socket.io-client";

type Message = string;

export default function Home(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState<string>("");
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const newSocket = io("http://localhost:8080");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("message", (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, [socket]);

  const sendMessage = () => {
    if (!socket) return;
    socket.emit("sendMessage", messageInput);
    setMessageInput("");
  };

  return (
    <div className="bg-gray-500 h-52 w-[100%]">
      <h1>WebSocket Test</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
