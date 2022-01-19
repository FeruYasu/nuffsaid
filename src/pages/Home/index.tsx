import { Button } from "@material-ui/core";
import { useState, useEffect, useCallback } from "react";
import generateMessage, { Message } from "../../Api";

import { Header } from "../../components/Header";
import { useThemeColor } from "../../hooks/ThemeColor";

import {
  ButtonsContainer,
  ColumnContainer,
  Container,
  MessagesContainer,
  Card,
} from "./styles";

export function Home() {
  const [errorMessages, setErrorMessages] = useState<Message[]>([]);
  const [warningMessages, setWarningMessage] = useState<Message[]>([]);
  const [infoMessages, setInfoMessages] = useState<Message[]>([]);
  const [receiveMessages, setReceiveMessages] = useState(true);
  const { themeColor } = useThemeColor();

  useEffect(() => {
    if (receiveMessages) {
      return generateMessage((message: Message) => {
        switch (message.priority) {
          case 1:
            setWarningMessage((oldMessages) => [...oldMessages, message]);
            break;
          case 2:
            setInfoMessages((oldMessages) => [...oldMessages, message]);
            break;
          default:
            setErrorMessages((oldMessages) => [...oldMessages, message]);
        }
      });
    }
  }, [receiveMessages]);

  const handleRemoveCard = useCallback(
    (msg: Message) => {
      switch (msg.priority) {
        case 1:
          setWarningMessage((oldMessages) =>
            oldMessages.filter((el) => el.message !== msg.message)
          );
          break;
        case 2:
          setInfoMessages((oldMessages) =>
            oldMessages.filter((el) => el.message !== msg.message)
          );
          break;
        default:
          setErrorMessages((oldMessages) =>
            oldMessages.filter((el) => el.message !== msg.message)
          );
      }
    },
    [setWarningMessage, setInfoMessages, setErrorMessages]
  );

  function handleClearAll() {
    setWarningMessage([]);
    setInfoMessages([]);
    setErrorMessages([]);
  }

  return (
    <Container>
      <Header />
      <ButtonsContainer>
        <Button
          variant="contained"
          onClick={() => setReceiveMessages(!receiveMessages)}
        >
          {receiveMessages ? "STOP" : "START"}
        </Button>
        <Button variant="contained" onClick={() => handleClearAll()}>
          CLEAR
        </Button>
      </ButtonsContainer>

      <MessagesContainer>
        <ColumnContainer>
          <h2>Error Type 1</h2>
          <h4>Count {errorMessages.length}</h4>

          {errorMessages.map((msg) => (
            <Card key={msg.message} styleType="error">
              <p>{msg.message}</p>
              <Button variant="text" onClick={() => handleRemoveCard(msg)}>
                Clear
              </Button>
            </Card>
          ))}
        </ColumnContainer>

        <ColumnContainer>
          <h2>Warning Type 2</h2>
          <h4>Count {warningMessages.length}</h4>

          {warningMessages.map((msg) => (
            <Card key={msg.message} styleType="warning">
              <p>{msg.message}</p>
              <Button variant="text" onClick={() => handleRemoveCard(msg)}>
                Clear
              </Button>
            </Card>
          ))}
        </ColumnContainer>

        <ColumnContainer>
          <h2>Info Type 3</h2>
          <h4>Count {infoMessages.length}</h4>

          {infoMessages.map((msg) => (
            <Card key={msg.message} styleType="info">
              <p>{msg.message}</p>
              <Button variant="text" onClick={() => handleRemoveCard(msg)}>
                Clear
              </Button>
            </Card>
          ))}
        </ColumnContainer>
      </MessagesContainer>
    </Container>
  );
}
