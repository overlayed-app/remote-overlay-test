const React = require('react')

/**
 * The literal simpliest component possible
 *
 * Not transpilation needed
 */
module.exports = props => {
  return React.createElement('div', undefined, [
    React.createElement('p', { key: 'greeting' }, `Hello ${props.name || 'world'}`),
  ])
}
