const Router = require('koa-router')

const { index, register, login } = require('../controller/users.controller')

const router = new Router({ prefix: '/users' })

router.get('/', index)

// 注册接口
router.post('/register', register)

// 登录接口
router.post('/login', login)

module.exports = router
