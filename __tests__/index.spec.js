const React = require('react')
const { render } = require('@testing-library/react')
require('@testing-library/jest-dom/extend-expect')

const App = require('../index')

test('renders default greeting', () => {
  const { getByText } = render(React.createElement(App))
  const textEl = getByText(/Hello world/i)
  expect(textEl).toBeInTheDocument()
})

test('renders custom greeting', () => {
  const { getByText } = render(React.createElement(App, { name: 'user' }))
  const textEl = getByText(/Hello user/i)
  expect(textEl).toBeInTheDocument()
})
