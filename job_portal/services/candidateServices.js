const db = require("../models/index");
const candidate = db.candidate;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("config")
const token = db.token;
const moment= require("moment")
exports.registerCandidate = async (data) => {
    let exist = await candidate.findOne({ where: { email: data.email } });
    if (exist) {
        return ({ status: 403, sucess: false, message: "candidate already exist" });
    }
    let salt = await bcrypt.genSalt(10);
    let hashpass = await bcrypt.hash(data.password, salt);
    let result = await candidate.create({
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        password: hashpass,
    })
    if (result) {
        return ({ status: 201, sucess: true, message: "candidate register sucessfully", data: candidate });
    }
}

exports.loginCandidate = async (data) => {
    let exist = await candidate.findOne({ where: { email: data.email } });
    if (!exist) {
        return ({ status: 404, sucess: false, message: "Candidate doesn't exist" });
    }
    let matched = await bcrypt.compare(data.password, exist.password);
    if (!matched) {
        return ({ status: 401, sucess: "false", message: "Unauthorised" });
    }
   
    let token1 = jwt.sign(
        {
            email: exist.email, id: exist.id,
            exp: Math.floor(Date.now() / 1000) + (60 * 10),
        },
        config.get("jwtPrivateKey")
    );
    
    var expiryTime = moment().add(10, 'minutes')
    // console.log(expiryTime);
    console.log("token1 = ", token1);
    let data1 = await token.create({
        candidateId: exist.id,
        token: token1,
        expiry_date:expiryTime,
    })
    console.log("data1 = ",data1);

    if (token) {
        return ({ status: 200, sucess: true, message: "Candidate login sucessfully", token: token1 })
    }
    // let token = await candidate.generateToken(
    //     exist.id,
    //     exist.email
    // )
    // if(token){
    //     return ({status:200,sucess:true,message:"user login sucessfully",token:token})
    // }
}

exports.logoutCandidate = async (data) => {
    // let exist = await token.findOne({where:{}})
    // let token = req.header()
    let token1 = data.split(" ")[1]
    let result = await token.destroy({ where: { token: token1 } });
    return ({ status: 200, sucess: true, message: "user logout sucessfully" })
}

exports.resetPassword = async (data) => {
    let exist = await candidate.findOne({ where: { email: data.email } });
    if (!exist) {
        return ({ status: 404, sucess: false, message: "User Doesn't Exist." });
    }
    const randomNumber = (Math.random() * 1000000).toFixed(0);
    const OTP = randomNumber.substring(0, 6);
    return OTP;
}

exports.findCandidate = async () => {
    let data = await candidate.findAll();
    if (!data) {
        return ({ status: 404, sucess: false, message: "No Data Found....." })
    }
    if (data) {
        return ({ status: 200, sucess: true, message: "Data found sucessfully", result: data })
    }
}