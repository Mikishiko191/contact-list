import React from 'react'
import { Hello } from './Hello'

import { render, screen } from '@testing-library/react'

it('Successfully run first test', () => {
   render(<Hello />)
   const element = screen.getByText('Hello test')
   expect(element).toBeInTheDocument()
})
