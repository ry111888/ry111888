import {render, screen} from "@testing-library/react";
import FooterLink from "./index";

test('FooterLink test', () => {
  render(<FooterLink href={'https://google.com'} linkName={'google'} />)
  const google = screen.getByText(/google/i)
  expect(google).toBeInTheDocument()

  expect(screen.getByRole('link')).toHaveAttribute('href', 'https://google.com')

})