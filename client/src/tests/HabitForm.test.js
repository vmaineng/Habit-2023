import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
const HabitForm = require('../components/HabitForm')

const mockResponse = {
  results: [
    {
      title: "Sleep",
      description: "Sleep at 7pm",
      category: "Health",
    },
    {
      title: "Save $100 more",
      description: "Move money into savings account",
      category: "Wealth",
    },
    {
      title: "Check in more often",
      description:
        "Journal thoughts and set up reminders to check in with myself more often",
      category: "Self-love",
    },
  ],
};

let windowFetchSpy;

const wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

let mockFetch = async (url) => {
  if (url.startsWith("http://localhost:3000") && url.includes("/habits")) {
    await wait(70);
    return {
      ok: true,
      status: 200,
      json: async () => mockResponse,
    };
  }
};

//set up and tear down
beforeEach(() => {
  windowFetchSpy = jest.spyOn(window, "fetch").mockImplementation(mockFetch);
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("should render Add a new habit", async () => {
  render(
    <BrowserRouter>
      <HabitForm />
    </BrowserRouter>
  );
  const titleText = screen.getByText("Add a new habit");
  expect(titleText).toBeInTheDocument();
});

test('should show titles after they are fetched', async () => {
    render (
    <BrowserRouter>
    <HabitForm />
    </BrowserRouter>);
    expect(windowFetchSpy).toHaveBeenCalled();
    expect(windowFetchSpy).toHaveBeenCalledWith('http://localhost:3000/api/habits')

    await waitFor(() => {
        expect(screen.getByText('Wealth')).toBeInTheDocument();
    })
})


