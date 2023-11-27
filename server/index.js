// Our Dependecies
const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors")
const app = express();

const FoodModel =require("./models/Food")
// const mysql = require('mysql');
app.use(express.json());
app.use(cors(
  {
    origin:["https://deploy-mern-1whq.vercel.app"],
    methods:["POST","GET"],
    credentials:true
  }
))

// mongoose.connect("mongodb://localhost:27017/fyp", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect("mongodb+srv://vinod:TJ2kXcTFoIaxdyF8@cluster0.ddh9vyx.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
console.log(' connected to the data base');
}).catch((e)=>{
    console.log('Error :',e);
});
app.get("/",
(req,res) =>{
  res.json("Hellow")
})

app.post("/register", async(req, res) => {
  console.log('inside register api');
const email = req.body.Email;
    const username = req.body.UserName;
    const password = req.body.Password;
console.log(email);
console.log(username);
console.log(password);




try {
    const check =await FoodModel.findOne({email:email})

    if(check)
    {
        res.json("exists")
        console.log('exists');
    }
    else{
        // res.json("not exists")
        // await FoodModel.insertMany([data])



        const newUser = new FoodModel({ email, username, password });
        await newUser.save();
        res.json("notexists");

    }

} catch (error) {
    
    console.error(error);
    res.status(500).json("Error during registration");


}


// const food = new FoodModel({email:email,username: username,password:password});

// console.log(food);
// try{
//     await food.save();
// res.send("insertedData")
// }

// catch(err)
// {
//     console.log(err);
// }

});


app.post("/login", async(req, res) => {
  

    const username = req.body.LoginUserName;
    const password = req.body.LoginPassword;

    const check = await FoodModel.findOne({username:username})
    console.log("check is :"+ check);

try{
    if(check)
    {
        res.json("exists")
        console.log('exists');
    }
    else{
        
        res.json("notexists")
        console.log('notexists');
    }
}
catch (e){
    res.json("notexists")

}

// .then (user =>{
//     if(user)
//     {
//         if(user.password ===password)
//         {
//             res.json("Success")
//         }
//         else{
//              res.json("The password is incorrect")
//         }
//     }
//     else{
//          res.json("Not username is found")
//     }

})





app.listen(3002, () => {
  console.log("Server is running on port 3002");
});

// app.use(express.json());
// app.use(cors());

// Let us run the server. So its running
// app.listen(3002, () => {
//   console.log("Server is running on port 3002");
// });

// Let us create our database (mysql)
// const db = mysql.createConnection({
//     user: 'root',
//     host: 'localhost',
//     password: '', //If you have set xampp password please enter it here
//     database: 'plantdb',
// })

// let us now create a route to the server that will register a user

// app.post('/register', (req, res) => {
//     const sentEmail = req.body.Email
//     const sentUserName = req.body.UserName
//     const sentPassword = req.body.Password

//     // Lets create SQL statement to insert the user to the Database table Users
//     const SQL = 'INSERT INTO users (email, username, password) VALUES (?,?,?)'
//     const Values = [sentEmail, sentUserName, sentPassword]

//     // Query to execute the sql statement stated above
//     db.query(SQL, Values, (err, results) => {
//         if (err) {
//             res.send(err)
//         }
//         else {
//             console.log('User inserted successfully!');
//             res.send({ message: 'User added!' })
//         }
//     })
// })

// app.post('/login', (req, res) => {
//     const sentloginUserName = req.body.LoginUserName
//     const sentLoginPassword = req.body.LoginPassword

//     // Lets create SQL statement to insert the user to the Database table Users
//     const SQL = 'SELECT * FROM users WHERE username = ? && password = ?'
//     const Values = [sentloginUserName, sentLoginPassword]

//         // Query to execute the sql statement stated above
//         db.query(SQL, Values, (err, results) => {
//             if(err) {
//                 res.send({error: err})
//             }
//             if(results.length > 0) {
//                 res.send(results)
//             }
//             else{
//                 res.send({message: `Credentials Don't match!`})
//             }
//         })
// })
