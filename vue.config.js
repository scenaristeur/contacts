//const {InjectManifest} = require('workbox-webpack-plugin');
// // https://medium.com/@stephen.trevor.wong/3-steps-to-add-pwa-to-vue-js-in-2020-9f9daa56f9
const publicPath = process.env.NODE_ENV === 'production' ? '/ldp-workspace/' : '/'


module.exports = {
  // options...
  publicPath: publicPath,
  pwa: {
    name: 'LDP Workspace',
    themeColor: '#4db6ba',
    msTileColor: 'red',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      share_target: {
        action: publicPath+'bookmarks',
        method: "GET",
        enctype: "application/x-www-form-urlencoded",
        params: {
          title: "title",
          text: "text",
          url: "url"
        }
      },
    },


    // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: './src/service-worker.js',
    //   // ...other Workbox options...
    // }
  },
  // plugins: [
  //   // Other plugins...
  //   new InjectManifest({
  //     swSrc: './src/sw.js',
  //   })
  // ]

}
