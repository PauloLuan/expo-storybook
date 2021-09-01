import { render, waitFor } from '@testing-library/react-native'
import React from 'react'
import { Teste } from '.'

// import theme from '../../styles/Theme'

describe('<Teste />', () => {
  const testId = 'component-teste-id'

  it('should render the Teste component', async () => {
    const { queryByTestId, toJSON } = render(<Teste testId={testId} />)
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
