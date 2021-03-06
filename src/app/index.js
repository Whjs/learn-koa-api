// 导入koa包
const Koa = require('koa')
const koaBody = require('koa-body')
const error = require('koa-json-error')

// 导入router
const userRouter = require('../router/users.route')

// 实例化 app 对象
const app = new Koa()

// 错误处理
app.use(error({
  format: (err) => {
    return { code: err.status, message: err.message, result: err.stack }
  },
  postFormat: (err, obj) => {
    const { result, ...res } = obj
    return process.env.NODE_ENV === 'production' ? res : obj
  }
}))

app.use(koaBody())

// 中间件
app.use(userRouter.routes())
.use(userRouter.allowedMethods())

module.exports = app
