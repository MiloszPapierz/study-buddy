import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithProviders } from 'helpers/renderWithProviders'
import AddUser from './AddUser'
import Dashboard from './Dashboard'

describe('Input With Button', () => {
   it('Renders the component', () => {
      renderWithProviders(
         <>
            <AddUser />
            <Dashboard />
         </>,
      )
      fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Adam' } })
      fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '50%' } })
      fireEvent.change(screen.getByTestId('Average'), { target: { value: '4' } })
      fireEvent.click(screen.getByTestId('Consent'))
      fireEvent.click(screen.getByText('Add'))
      screen.getByText('Adam')
   })

   it('Prevents adding new user if the consent if not checked', () => {
      renderWithProviders(
         <>
            <AddUser />
            <Dashboard />
         </>,
      )
      fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Adam' } })
      fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '50%' } })
      fireEvent.change(screen.getByTestId('Average'), { target: { value: '4' } })
      fireEvent.click(screen.getByText('Add'))
      const newUser = screen.queryByText('Adam')
      expect(newUser).not.toBeInTheDocument()
   })
})
