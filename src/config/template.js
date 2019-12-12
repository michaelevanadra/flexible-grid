/**
 * List of predefined most commonly used style for your site.
 *
 * Important:
 * Each object should have a string 'element' and object 'style'.
 *
 * TODO: These values should be fetched from a backend service.
 */
export default {
  RoundedContainer: {
    element: 'div',
    style: {
      'border-radius': '10px'
    }
  },
  Circle: {
    element: 'div',
    style: {
      'border-radius': '100px',
      'width': '100px',
      'height': '100px',
      'border': '1px solid red'
    }
  },
  Title: {
    element: 'h1',
    style: {
      color: 'white',
      background: 'gray'
    }
  }
} 