export const sampleGridConfig = {
  id: 'main-parent',
  direction: 'column',
  border: '1px dashed #ccc',
  items: [
    {
      id: '1',
      border: '1px dashed #ccc',
      items: [
        {
          id: '1',
          direction: 'column',
          border: '1px dashed #ccc',
          items: [
            {
              id: '1',
              grow: '2',
              border: '1px dashed #ccc'
            },
            {
              id: '2',
              border: '1px dashed #ccc'
            },
            {
              id: '3',
              border: '1px dashed #ccc',
              items: [
                {
                  id: '1',
                  border: '1px dashed #ccc'
                },
                {
                  id: '2',
                  border: '1px dashed #ccc'
                },
                {
                  id: '3',
                  direction: 'column',
                  border: '1px dashed #ccc',
                  items: [
                    {
                      id: '1',
                      border: '1px dashed #ccc',
                      items: [
                        {
                          id: '1',
                          border: '1px dashed #ccc'
                        },
                        {
                          id: '2',
                          border: '1px dashed #ccc'
                        },
                        {
                          id: '3',
                          border: '1px dashed #ccc'
                        }
                      ]
                    },
                    {
                      id: '2',
                      border: '1px dashed #ccc'
                    },
                    {
                      id: '3',
                      border: '1px dashed #ccc'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: '2',
          border: '1px dashed #ccc',
          direction: 'column',
          items: [
            {
              id: '1',
              basis: '30%',
              order: '2',
              border: '1px dashed #ccc'
            },
            {
              id: '2',
              order: '1',
              border: '1px dashed #ccc'
            }
          ]
        },
        {
          id: '3',
          border: '1px dashed #ccc'
        }
      ]
    },
    {
      id: '2',
      border: '1px dashed #ccc',
      items: [
        {
          id: '1',
          border: '1px dashed #ccc'
        },
        {
          id: '2',
          direction: 'column',
          border: '1px dashed #ccc',
          items: [
            {
              id: '1',
              shrink: '2',
              border: '1px dashed #ccc'
            },
            {
              id: '2',
              border: '1px dashed #ccc'
            },
            {
              id: '3',
              grow: '2',
              border: '1px dashed #ccc'
            }
          ]
        }
      ]
    }
  ]
};
