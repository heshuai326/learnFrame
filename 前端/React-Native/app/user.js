'user strict'

const mongoose = require('mongoose')

// 骨架
const UserSchema = new mongoose.Schema({
  phoneNumber:{
      unique:true,
      type:String
  },
  areaCode:String,
  verify:String,
  accessToken:String,
  nickName:String,
  gender:String,
  breed:String,
  age:String,
  avatar:String,
  meta:{
      createAt:{
          type:Date,
          default:Date.now()
      },
      updateAt:{
          type:Date,
          default:Date.now()
      }
  }

})

UserSchema.pre('save',function(next){
    if(this.isNew){
        this.meta.updateAt = Date.now()
    }
})

// 建模
const UserModel = mongoose.Model('User',UserSchema)

module.exports = UserModel