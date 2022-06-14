const User = require('../model/user.model')

class UserService {
  async createUser ({ user_name, password }) {
    // todo: 写入数据库
    // 获取数据
    // 操作数据库
    // 返回结果
    // return '写入数据库成功'
    const res = await User.create({ user_name, password })
    return res
  }
}

module.exports = new UserService()
