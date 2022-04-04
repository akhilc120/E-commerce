const mongoose=require("mongoose");
const items=require("./model/itemModel");

mongoose.connect("mongodb://localhost:27017/coolingGlass");

let Data=[{
    name:"Sweatshirt",
    image:"https://images.unsplash.com/photo-1647858881692-cd17fd80cf51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    des:"A wide range of dressing for Men, Women and kids",
    quantity:0,
    price:1200
},{
    name:"Shirt for Men",
    image:"https://media.istockphoto.com/photos/portrait-of-businessman-smiling-against-wall-picture-id878395336?b=1&k=20&m=878395336&s=170667a&w=0&h=E-jyj95oWVLjVMTCf6z7umTa4MTy9gIJyU0a9phsflE=",
    des:"A wide range of dressing for Men, Women and kids",
    quantity:0,
    price:900
},{
    name:"women clothin",
    image:"https://unsplash.com/photos/xgNSlx7DjYM",
    des:"A wide range of dressing for Men, Women and kids.",
    quantity:0,
    price:200
},{
    name:"Tshirt1",
    image:"https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    des:"A wide range of dressing for Men, Women and kids.",
    quantity:0,
    price:600
},{
    name:"cat2",
    image:"https://images.unsplash.com/photo-1625591340248-6d289000f96a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VuZ2xhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    des:"A wide range of dressing for Men, Women and kids",
    quantity:0,
    price:1400
},{
    name:"Kids",
    image:"https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnRzJTIwa2lkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    des:"A wide range of dressing for Men, Women and kids",
    quantity:0,
    price:1800
},{
    name:"kids",
    image:"https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnRzJTIwa2lkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    des:"A wide range of dressing for Men, Women and kids",
    quantity:0,
    price:1600
},{
    name:"Men",
    image:"https://images.unsplash.com/photo-1608030609295-a581b8f46672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    des:"A wide range of dressing for Men, Women and kids",
    quantity:0,
    price:1900
},{
    name:"Men",
    image:"https://media.istockphoto.com/photos/successful-businessman-picture-id1328677010?b=1&k=20&m=1328677010&s=170667a&w=0&h=hf-1ArzaMZTQwR9LV2Lg-FH7lhrcFCYknXg3PQ9jqsY=",
    des:"A wide range of dressing for Men, Women and kids",
    quantity:0,
    price:1850
}]

async function sampleData(){
    await items.deleteMany();
    await items.insertMany(Data);
    console.log("done");
}

sampleData();