import { Button } from "@material-ui/core";
import { Message } from "../../Api";
import { useMessages } from "../../hooks/Messages";
import { ColumnContainer, Card } from "./styles";

interface MessageColumnProps {
  messages: Message[];
  title: string;
  type: "error" | "warning" | "info";
}

export function MessageColumn({ messages, title, type }: MessageColumnProps) {
  const { handleRemoveCard } = useMessages();

  return (
    <ColumnContainer>
      <h2>{title}</h2>
      <h4>Count {messages?.length}</h4>

      {messages?.map((msg, index) => (
        <Card key={msg.message} styleType={type}>
          <p>{msg.message}</p>
          <Button
            data-testid={`clear-card-${index}`}
            variant="text"
            onClick={() => handleRemoveCard(msg)}
          >
            Clear
          </Button>
        </Card>
      ))}
    </ColumnContainer>
  );
}
