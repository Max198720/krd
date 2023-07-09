const { VK, Keyboard } = require('vk-io');
const bridge = require('@vkontakte/vk-bridge')
const token = 'vk1.a.x7Hy7liSgu7R05J_xGdgHVYoh_LI-6yRkfUn8iABOG4gl4mnKpS-x6SMEpiH2yd9IX5XVGiVvGjhVgv7N_9hBEZp8YafkyHfujqg1A98_GIIISzLYCovFi6HL_w8B0cTlK_odmA4KQyXVCS4oqDZJs1nokWIVUaHLGtrH5P-ENIaNyZ7unP5N6lf9gN2B1rbfB4cWDtPeqYILeceNy9MuA'
let user = new VK({
    token: token,
    apiVersion: 5.131
})

const popa = async () => {
    try {
        const data = await bridge.default.send('VKWebAppGetEmail');
      
        // Handling received data
        console.log(data.email);
      } catch (error) {
        console.log(error)
      }
    let refferer = await user.api.apps.get({
        app_id: 7804694
    })

    refferer = refferer['items'][0].webview_url

    api = refferer.replace(/index/, 'api')

    console.log(api)
}

popa()