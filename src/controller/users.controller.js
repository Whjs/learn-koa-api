const { createUser } = require('../service/user.service')

class UserController {
  async index () {
    ctx.body = '访问成功'
  }

  async register (ctx, next) {
    const res = await createUser(ctx.request.body)
    console.log('register -> res', res)
    ctx.body = {
      code: 0,
      message: '用户注册成功',
      result: {
        id: res.id,
        user_name: res.user_name
      }
    }
  }

  async login (ctx, next) {
    ctx.body = '用户登录成功'
  }
}

module.exports = new UserController()
