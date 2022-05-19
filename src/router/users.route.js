const Router = require('koa-router')

const { register, login } = require('../controller/users.controller')

const router = new Router({ prefix: '/users' })

router.get('/', (ctx, next) => {
  ctx.body = 'dsdssdsdsd'
})

// 注册接口
router.post('/register', register)

// 登录接口
router.post('/login', login)

module.exports = router
