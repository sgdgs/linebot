import 'dotenv/config'
import linebot from 'linebot'
import * as paa from './command/pa.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (process.env.DEBUG === 'true') {
    console.log(event)
  }

  if (event.message.type === 'text') {
    paa.daa(event)
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
