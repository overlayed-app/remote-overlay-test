const React = require('react')
const { render } = require('@testing-library/react')
require('@testing-library/jest-dom/extend-expect')

const AppAlloc = require('../index')

const makeApp = () => {
  return AppAlloc(React, React.version)
}

test('renders default greeting', () => {
  const { getByText } = render(React.createElement(makeApp()))
  const textEl = getByText(/Hello world/i)
  expect(textEl).toBeInTheDocument()
})

test('renders custom greeting', () => {
  const { getByText } = render(React.createElement(makeApp(), { name: 'user' }))
  const textEl = getByText(/Hello user/i)
  expect(textEl).toBeInTheDocument()
})
