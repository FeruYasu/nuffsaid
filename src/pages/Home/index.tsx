import { Button } from "@material-ui/core";

import { Header } from "../../components/Header";

import { ButtonsContainer, Container, MessagesContainer } from "./styles";

import { Toast } from "../../components/Toast";
import { useMessages } from "../../hooks/Messages";
import { MessageColumn } from "../../components/MessageColumn";

export function Home() {
  const {
    errorMessages,
    infoMessages,
    warningMessages,
    toastMessage,
    handleClearAll,
    receiveMessages,
    setReceiveMessages,
  } = useMessages();

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
        <MessageColumn
          title="Error Type 1"
          messages={errorMessages}
          type={"error"}
        />
        <MessageColumn
          title="Warning Type 2"
          messages={warningMessages}
          type={"warning"}
        />
        <MessageColumn
          title="Info Type 3"
          messages={infoMessages}
          type={"info"}
        />
      </MessagesContainer>

      <Toast message={toastMessage} />
    </Container>
  );
}
