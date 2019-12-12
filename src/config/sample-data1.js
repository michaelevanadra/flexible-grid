export default {
  element: 'div',
  content: 'MIKE TEST',
  children: [
    {
      element: 'h1',
      content: 'This is the header using H1'
    },
    {
      element: 'div',
      style: {
        border: '1px solid red'
      },
      children: [
        {
          element: 'span',
          style: {
            border: '1px solid green'
          },
          content: 'Green SPAN'
        },
        {
          element: 'span',
          style: {
            border: '1px solid blue'
          },
          content: 'Blue SPAN'
        }
      ]
    }
  ]
}