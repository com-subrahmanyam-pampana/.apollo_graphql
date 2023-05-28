import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_BOOKS, Books } from "./components/Books";

const mocks = [
  {
    request: {
      query: GET_BOOKS
    },
    result: {
      data: {
        books: [
          {
            "title": "The Awakening"
          },
          {
            "title": "City of Glass"
          }
        ]
      }
    }
  }
];

it("renders without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Books  />
    </MockedProvider>
  );
  expect(await screen.findByText("Loading...")).toBeInTheDocument();
});

it("The Awakening Book should be in the doc", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Books  />
    </MockedProvider>
  );
  expect(await screen.findByText("The Awakening")).toBeInTheDocument();
});

