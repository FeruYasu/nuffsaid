import { FunctionComponent, ReactNode } from "react";
import { useMessages, MessagesProvider } from "../hooks/Messages";
import { renderHook, act } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react";

describe("useMessages (context)", () => {
  const Provider = ({ children }: { children?: ReactNode }) => (
    <MessagesProvider>{children}</MessagesProvider>
  );
  const makeWrapper = (value: any): FunctionComponent => Provider;

  it("should use context provided config", async () => {
    const { result } = renderHook(() => useMessages(), {
      wrapper: makeWrapper({
        infoMessages: [],
        warningMessages: [],
        errorMessages: [],
        toastMessage: [],
        handleClearAll: () => {},
        handleRemoveCard: () => {},
        receiveMessages: true,
        setReceiveMessages: () => {},
      }),
    });

    await waitFor(() => {
      expect([
        result.current.errorMessages.length,
        result.current.warningMessages.length,
        result.current.infoMessages.length,
      ]).toContain(1);
    });

    act(() => {
      result.current.handleClearAll();
    });

    await waitFor(() => {
      expect([
        result.current.errorMessages.length,
        result.current.warningMessages.length,
        result.current.infoMessages.length,
      ]).not.toContain(1);
    });

    act(() => {
      result.current.setReceiveMessages(false);
    });

    await waitFor(() => {
      expect(result.current.receiveMessages).toBe(false);
    });
  });
});
