const publicPath = process.env.NODE_ENV === 'production' ? '/ldp-workspace/' : '/'

module.exports = {
  "publicPath": publicPath,
  "pwa": {
    "name": "LDP Workspace",
    "themeColor": "#4db6ba",
    "msTileColor": "red",
    "appleMobileWebAppCapable": "yes",
    "appleMobileWebAppStatusBarStyle": "black",
    "manifestOptions": {
      "share_target": {
        "action": "/bookmarks",
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
