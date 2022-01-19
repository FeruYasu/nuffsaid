import { useState, useEffect } from "react";
import generateMessage, { Message } from "../../Api";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Home() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    return generateMessage((message: Message) => {
      setMessages((oldMessages) => [...oldMessages, message]);
    });
  }, [setMessages]);

  return (
    <Container>
      <Header />

      <div>
        {messages?.map?.((msg) => (
          <div key={msg?.message}>{msg?.message}</div>
        ))}
      </div>
    </Container>
  );
}
