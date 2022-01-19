import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Home } from "../pages/Home";
import { light } from "../styles/themes/light";

jest.mock("../hooks/Messages", () => {
  return {
    useMessages: () => {
      return {
        infoMessages: [
          {
            message: "Dolorem nostrum magni rerum a numquam sint odio.",
            priority: 2,
          },
          {
            message:
              "Inventore quia ex neque aliquid officiis voluptatum soluta quis.",
            priority: 2,
          },
        ],
        warningMessages: [
          {
            message: "Voluptas quisquam voluptatem officia quia quia quia.",
            priority: 1,
          },
          {
            message:
              "Laudantium explicabo incidunt at nesciunt eos blanditiis laudantium ea.",
            priority: 1,
          },
          {
            message:
              "Eaque accusantium autem soluta nemo blanditiis beatae doloribus.",
            priority: 1,
          },
        ],
        errorMessages: [
          {
            message:
              "Ea quia exercitationem illum magni iusto accusantium consequatur sapiente.",
            priority: 0,
          },
        ],
        toastMessage: [],
        handleClearAll: () => {},
        handleRemoveCard: () => {},
        receiveMessages: true,
        setReceiveMessages: () => {},
      };
    },
  };
});

describe("Home page", () => {
  it("Should render correctly", () => {
    const comp = render(
      <ThemeProvider theme={light}>
        <Home />
      </ThemeProvider>
    );
    expect(comp).toBeTruthy();
  });

  it("Should show error, warning and info cards", () => {
    render(
      <ThemeProvider theme={light}>
        <Home />
      </ThemeProvider>
    );

    expect(
      screen.queryByText("Dolorem nostrum magni rerum a numquam sint odio.")
    ).toBeInTheDocument();
    expect(screen.queryByText("Count 1")).toBeInTheDocument();

    expect(
      screen.queryByText("Voluptas quisquam voluptatem officia quia quia quia.")
    ).toBeInTheDocument();
    expect(screen.queryByText("Count 2")).toBeInTheDocument();

    expect(
      screen.queryByText(
        "Ea quia exercitationem illum magni iusto accusantium consequatur sapiente."
      )
    ).toBeInTheDocument();
    expect(screen.queryByText("Count 3")).toBeInTheDocument();
  });
});
