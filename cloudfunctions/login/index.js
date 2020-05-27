// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "test-41qbp"
})
const db= cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
return await db.collection('user').where({
  name:event.name,
  pwd:event.pwd
}).get()
// return await db.collection('user').get()
}