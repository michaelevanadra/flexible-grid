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
      'border-radius': '10px',
      'padding': '10px'
    }
  },
  Circle: {
    element: 'div',
    style: {
      'border-radius': '150px',
      'width': '150px',
      'height': '150px',
      'border': '1px solid red',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center'
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