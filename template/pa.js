export default () => {
  return {
    type: 'bubble',
    hero: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1610555356070-d0efb6505f81?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover',
      action: {
        type: 'uri',
        uri: 'http://linecorp.com/'
      }
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: 'OO山',
          weight: 'bold',
          size: 'xl'
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '最高溫',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: 'O度',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '最低溫',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: 'O度',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '舒適度',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: '非常寒冷',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
