import {render, screen} from "@testing-library/react";
import Footer from "./index";

test('Footer test', () => {
  render(<Footer/>)
  const github = screen.getByText(/github/i)
  const linkedin = screen.getByText(/linkedin/i)
  expect(github).toBeInTheDocument()
  expect(linkedin).toBeInTheDocument()
})