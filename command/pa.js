import axios from 'axios'
import paTemplate from '../template/pa.js'
import fs from 'fs/promises'
import _ from 'lodash'

export const padata = []

export const daa = async (event) => {
  try {
    const { data } = await axios.get('https://opendata.cwa.gov.tw/fileapi/v1/opendataapi/F-B0053-031?Authorization=CWA-BE23B762-DB2D-4D3E-BD84-A01F3F6F2205&downloadType=WEB&format=JSON')

    padata.splice(0, padata.length)

    for (let i = 0; i < data.cwaopendata.dataset.locations.location.length; i++) {
      const mountain = data.cwaopendata.dataset.locations.location[i].locationName
      const comfortable = data.cwaopendata.dataset.locations.location[i].weatherElement[7].time[0].elementValue[1].value
      const hTemperature = data.cwaopendata.dataset.locations.location[i].weatherElement[3].time[0].elementValue.value
      const lTemperature = data.cwaopendata.dataset.locations.location[i].weatherElement[4].time[0].elementValue.value

      const template = paTemplate()
      template.body.contents[0].text = `${mountain}`
      template.body.contents[1].contents[0].contents[1].text = `${hTemperature}度`
      template.body.contents[1].contents[1].contents[1].text = `${lTemperature}度`
      template.body.contents[1].contents[2].contents[1].text = `${comfortable}`
      if (process.env.DEBUG === 'true') {
        await fs.writeFile('./dump/pa.json', JSON.stringify(template, null, 2))
      }

      padata.push(template)
    }

    const mData = padata.filter(paTemplate => {
      return paTemplate.body.contents[0].text.includes(event.message.text)
    })

    // const result = await event.reply({
    //   type: 'flex',
    //   altText: '查詢資訊',
    //   contents: {
    //     type: 'carousel',
    //     contents: mData
    //   }
    // })
    // console.log(result)
    const replies = _.chunk(mData, 10)
      .slice(0, 1)
      .map((reply) => {
        return {
          type: 'flex',
          altText: '一起爬山吧~',
          contents: {
            type: 'carousel',
            contents: reply
          }
        }
      })

    let rt
    if (replies.length > 0) {
      rt = await event.reply(replies)
    } else {
      rt = await event.reply('找不到 請查詢某某山')
      console.log(rt, '山')
    }
  } catch (error) {
    console.log(error)
    await event.reply('抱歉，發生了一些問題。請稍後再試。')
  }
}
