const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeModel = require('./model/employee')

const app = express()
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");


const checkEmailExists = async (email) => {
    const existingUser = await EmployeModel.findOne({ email });
    return existingUser !== null;
};

app.post('/register', async (req, res) => {


    try {
        const {email}=req.body
        const emailExists = await checkEmailExists(email);
        if (emailExists) {
            return res.json({ error: 'Email already exists' });
        }

        

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });

    }
    EmployeModel.create(req.body)
            .then(register => res.json(register))
            .catch(err => res.json(err))

})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("the password is incorrect")
                }

            }
            else {
                res.json("User not found!")
            }
        })
})

app.listen(3001, () => {
    console.log("server is running")
})