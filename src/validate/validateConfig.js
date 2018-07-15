const validateConfig = {
  locale: 'zh_TW',
  dictionary: {
    zh_TW: {
      messages: {
        required: (name) => {
          return name + '不能空值'
        },
        email: (name) => {
          return name + '格式錯誤'
        },
        min: (name, i) => {
          return name + '至少' + i + '碼'
        },
        confirmed: (name) => {
          return name + '輸入不一致'
        }
      }
    }
  }
}
export default validateConfig
