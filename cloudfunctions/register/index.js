// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "test-41qbp"
})
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  let data1 = {
    name: event.name,
    pwd: event.pwd
  }
  return await db.collection('user').add({
    data: data1,
  })
}