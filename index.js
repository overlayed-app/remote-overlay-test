/**
 * A react-injectable component creator
 */
export default (React, version) => {
  /**
   * The literal simpliest component possible
   *
   * Not transpilation needed
   */
  return props => {
    return React.createElement('div', undefined, [
      React.createElement('p', { key: 'greeting' }, `Hello ${props.name || 'world'}`),
    ])
  }
}
