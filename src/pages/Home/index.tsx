import { useState, useEffect } from "react";
import generateMessage, { Message } from "../../Api";
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
      <div>
        {messages?.map?.((msg) => (
          <div key={msg?.message}>{msg?.message}</div>
        ))}
      </div>
    </Container>
  );
}
