import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/random-link">children</LinkWrapper>)

    const children = screen.getByRole('link', { name: /children/i })

    expect(children).toBeInTheDocument()
  })
})
