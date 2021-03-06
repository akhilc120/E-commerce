const express=require("express");
const app=express();
const userRoutes=require("./routes/userRoutes")
const orderRoutes=require("./routes/orderRoutes")
const cartRoutes=require('./routes/cartRoutes');
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const SECRET="coolingglass";


mongoose.connect("mongodb://localhost:27017/coolingGlass")

mongoose.connection.once('open', function () {
    console.log('Database connected Successfully');
}).on('error', function (err) {
    console.log('Error', err);
})


app.use("",userRoutes);
app.use("",orderRoutes);

app.use("/order", (req, res, next) => {
    const token = req.headers.authorization.split("test ")[1];
    // console.log(req.headers.authorization.split("test ")[1])
    if (!token) {
        return res.status(404).json({
            status: "failed",
            message: "token is missing"
        })
    }
    // jwt verify token
    jwt.verify(token, SECRET, async function (err, decoded) {
        if (err) {
            return res.status(404).json({
                status: "failed",
                message: "invaild token"
            })
        }
        req.user = decoded.data;
        next();
    })
})

app.use("/order",cartRoutes);

// app.get("/",(req,res)=>{
//     res.send("ok")
// })

const PORT=process.env.PORT || 5000;


app.listen(5000,()=>console.log(`server at ${PORT}`));