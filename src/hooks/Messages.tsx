import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import generateMessage, { Message } from "../Api";

interface MessagesProps {
  children: ReactNode;
}

interface MessagesContextData {
  errorMessages: Message[];
  warningMessages: Message[];
  infoMessages: Message[];
  toastMessage: string | null;

  receiveMessages: boolean;
  setReceiveMessages: (isGetting: boolean) => void;

  handleClearAll: () => void;
  handleRemoveCard: (msg: Message) => void;
}

export const MessagesContext = createContext<MessagesContextData>(
  {} as MessagesContextData
);

export function MessagesProvider({ children }: MessagesProps) {
  const [errorMessages, setErrorMessages] = useState<Message[]>([]);
  const [warningMessages, setWarningMessage] = useState<Message[]>([]);
  const [infoMessages, setInfoMessages] = useState<Message[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [receiveMessages, setReceiveMessages] = useState(true);

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
            setToastMessage(message.message);
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
    <MessagesContext.Provider
      value={{
        errorMessages,
        warningMessages,
        infoMessages,
        toastMessage,
        handleClearAll,
        handleRemoveCard,
        receiveMessages,
        setReceiveMessages,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}

export function useMessages() {
  return useContext(MessagesContext);
}
