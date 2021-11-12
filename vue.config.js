const publicPath = process.env.NODE_ENV === 'production' ? '/contacts/' : '/'

module.exports = {
  "publicPath": publicPath,
  "pwa": {
    "name": "Contacts",
    "themeColor": "#4db6ba",
    "msTileColor": "red",
    "appleMobileWebAppCapable": "yes",
    "appleMobileWebAppStatusBarStyle": "black",
    "manifestOptions": {
      "share_target": {
        "action": "/import",
        "method": "GET",
        "enctype": "application/x-www-form-urlencoded",
        "params": {
          "title": "title",
          "text": "text",
          "url": "url"
        }
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
