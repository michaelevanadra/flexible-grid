export const sampleGridConfig = {
  id: 'main-parent',
  direction: 'column',
  children: [
    {
      id: '1',
      children: [
        {
          id: '1',
          direction: 'column',
          children: [
            {
              id: '1',
              grow: '2'
            },
            {
              id: '2'
            },
            {
              id: '3',
              children: [
                {
                  id: '1'
                },
                {
                  id: '2'
                },
                {
                  id: '3',
                  direction: 'column',
                  children: [
                    {
                      id: '1',
                      children: [
                        {
                          id: '1'
                        },
                        {
                          id: '2'
                        },
                        {
                          id: '3'
                        }
                      ]
                    },
                    {
                      id: '2'
                    },
                    {
                      id: '3'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: '2',
          direction: 'column',
          children: [
            {
              id: '1',
              basis: '30%',
              order: '2'
            },
            {
              id: '2',
              order: '1'
            }
          ]
        },
        {
          id: '3'
        }
      ]
    },
    {
      id: '2',
      children: [
        {
          id: '1'
        },
        {
          id: '2',
          direction: 'column',
          children: [
            {
              id: '1',
              shrink: '2'
            },
            {
              id: '2'
            },
            {
              id: '3',
              grow: '2'
            }
          ]
        }
      ]
    }
  ]
};
