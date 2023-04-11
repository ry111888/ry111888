import {render, screen} from "@testing-library/react";
import Content from "./index";

test('Content Component', () => {
  render(<Content />)
  const im = screen.getByText(/I'm/i)
  expect(im).toBeInTheDocument()
  const yiRen = screen.getByText(/Yi Ren/i)
  expect(yiRen).toBeInTheDocument()
  const sw = screen.getByText(/Software Engineer & Frontend Developer/i)
  expect(sw).toBeInTheDocument()
})