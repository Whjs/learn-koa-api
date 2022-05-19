const { APP_PORT } = require('./config/config.default')

const app = require('./app')

// 启动服务
app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`)
})