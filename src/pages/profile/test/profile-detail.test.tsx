import { render, screen } from "@testing-library/react";
import { useQuery } from "@tanstack/react-query";
import ProfileDetails from "../profile-details";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

const mockUserData = {
  name: "Nuriddinov Qudratjon",
  email: "qudratjonnuriddinov2603@gmail.com",
  bio: "Front End Developer",
};

test("renders user profile", () => {
  (useQuery as jest.Mock).mockReturnValue({
    data: mockUserData,
    isLoading: false,
    error: null,
  });

  render(<ProfileDetails />);

  expect(screen.getByText("Nuriddinov Qudratjon")).toBeInTheDocument();
  expect(
    screen.getByText("qudratjonnuriddinov2603@gmail.com")
  ).toBeInTheDocument();
  expect(screen.getByText("Front End Developer")).toBeInTheDocument();
  expect(screen.getByAltText("Profile")).toHaveAttribute("src");
});

// test("shows loading state", () => {
//   (useQuery as jest.Mock).mockReturnValue({
//     data: null,
//     isLoading: true,
//     error: null,
//   });

//   render(<ProfileDetails />);

//   expect(screen.getByText("Loading...")).toBeInTheDocument();
// });

// test("shows error state", () => {
//   (useQuery as jest.Mock).mockReturnValue({
//     data: null,
//     isLoading: false,
//     error: new Error("Network error"),
//   });

//   render(<ProfileDetails />);

//   expect(screen.getByText("Error: Network error")).toBeInTheDocument();
// });
