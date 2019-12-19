/**
 * Mock JSON object for rendering UI. Future implementation would be 
 * generating and retrieving this content from a backend service. :)
 *
 * Property definition:
 * @param {String} element Any valid HTML element. Default value is 'div'.
 * @param {String} className For backwards compatibility, to support css based classes instead of styled component
 * @param {Array[Object]} children List of possible elements within the container
 * @param {String} content Label or string to render within an element
 * @param {Object} styledType Predefined styles in template.js for consistency and reusability
 * @param {Object} style Style of the component. This could override the values defined in 'styledType' if they both exist.
 */
export default {
  element: 'div',
  className: 'some-bootstrap-class',
  children: [
    {
      element: 'h1',
      content: 'Rendering style from JSON'
    },
    {
      element: 'div',
      className: 'some-bootstrap-class-2',
      styleType: 'RoundedContainer',
      style: {
        border: '1px solid red',
        display: 'flex'
      },
      children: [
        {
          styleType: 'Circle',
          style: {
            border: '1px solid green'
          },
          content: 'Green Circle'
        },
        {
          styleType: 'Circle',
          style: {
            border: '1px solid blue',
            'margin': '0 20px'
          },
          content: 'Blue Circle'
        },
        {
          element: 'span',
          style: {
            border: '1px solid gray'
          },
          content: 'Gray Span'
        }
      ]
    }
  ]
}