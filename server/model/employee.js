const mongoose = require('mongoose')
const EmployeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:String,
})

const EmployeModel = mongoose.model("register", EmployeSchema)
module.exports=EmployeModel