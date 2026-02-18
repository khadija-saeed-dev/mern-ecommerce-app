require('dotenv').config(); // loads environment variables from .env
const port = process.env.PORT || 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { error } = require('console');

app.use(express.json());
app.use(cors());

//2): Database connection with local mongodb
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log(" Local MongoDB connected"))
  .catch(err => console.log(" MongoDB error:", err.message));

// chatgpt version of mongodb Atlas




  
//1): creating API
app.get('/', (req, res) => {
  res.send('express is running ');
});

// //4): IMAGE storage Enigin (1):
// const storage=multer.diskStorage({
//     destination:'./upload/images',
//     filename:(req,file,cb)=>{
//         return cb(null ,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })
//  //(2) pass the above configuration in multer storage or is ko multer middleware bhi bolte hain
//     const upload=multer({storage:storage})

//     //(4) middleware for multer
//     app.use('/images',express.static('upload/images'))
// //(3) kue k hum ko browser pr show kr na hai to post req say aak image upload ka route banayen gye 
//  app.post('/upload',upload.single('product') ,(req,res)=>{
//     res.json({
//         success:1,
//         image_url:`http://localhost:${port}/images/${req.file.filename}`
//     })
//  })


// 4): chatgpt version for cloudinary instead of multer

const upload = require("./middleware/upload"); // Cloudinary middleware

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: req.file.path, // Cloudinary URL
  });
});




 //5): Schema for creating Products(1)
 const Product=mongoose.model('Product',{
    id:{
        type:Number,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    new_price:{
        type:Number,
        require:true,
    },
    old_price:{
        type:Number,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avilable:{
        type:Boolean,
        default:true,
    },
 })
 //(2) now make end point matlab route for product
app.post('/addproduct' ,async(req ,res)=>{
    // (3) For genrate id automatically
    const products =await Product.find({})
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1)
        let last_product=last_product_array[0]
        id=last_product.id+1
    }
    else{
        id=1;
    }
    // X------X------X 
    // (2) wala part phele phir id generat karyn gye 
    const product= new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    })
    console.log(product);
    //to save in database(mongodb)
    await product.save();
    console.log('DATA Saved!!!!!!')
    //generate responce from frontend 
    res.json({
        success:true,
        name:req.body.name,
    })
    
})


// 6):Creating API To Remove the product from database
app.post('/removeproduct' ,async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id})
    console.log("Removed");
    // generate responce from frontend!!!!
    res.json({
        success:1,
        name:req.body.name
    })
})




// 7): Creating API For Getting all products
app.get("/allproducts" , async(req ,res)=>{
    let products = await Product.find({})
    console.log("Fetched All Product!!!!");
    res.send(products)
    
})
//8): Creating  "SCHEMA" for User Model in DB
const Users = mongoose.model('Users',{
          name:{
            type:String
          },
          email:{
            type:String,
            unique:true
          },
          password:{
            type:String,
            // unique:true
          },
          cartData:{
            type:Object
          },
          date:{
            type:Date,
            default:Date.now
          }

})
// 9): Creating EndPoints For Registring the user (Signup Routes)
app.post('/signup',async(req,res)=>{
    let check = await Users.findOne({email:req.body.email})
    if(check){
        return res.status(400).json({success:false , errors:"Already User Registered With Same email address"})
    }
    // if the user is not registerd than make an array..
    let cart={}
    for (let i = 0; i < 300 ; i++) {
         cart[i] = 0;
        
    }
    // Create the User Using the User Model
    const user = new Users({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    // Save the User in DataBase
    await user.save();
    // now after that creating the jwt key
    const data ={
       user:{
         id:user.id
       }
    }
    // now  genrate the Token and create one layer encrypted salt so that the data will remains the secure 
    const token=jwt.sign(data ,'secret_ecom');  
    res.json({success:true , token})

   
})

// 10): Creating ENDPOINS for login
app.post('/login' , async(req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password=== user.password ;
        // aagar to passwardbhi theek hai input wala or database wala to aak jwt key bana do
        if(passCompare){
            const data={
                user:{
                    id:user.id
                }
            }
             // now  genrate the Token and create one layer encrypted salt so that the data will remains the secure 
           const token = jwt.sign(data, process.env.JWT_SECRET)
           res.json({
            success:true,
            token
           })
        }
        else{
            res.json({
                success:false,
                errors:" Incorrect Password"
            })
        }
    }
    else{
        res.json({
            success:false,
            errors:"Wrong Email Address"
        })
    }
})


// 11) creating endpoints for NewCollection section in frontend abb wahan pr jo data hai wo backend say mongodb say aaye ga 
app.get('/newcollections',async(req , res )=>{
    let products = await Product.find({});
    // frontend pr sirf 8 cards show krwanay too ye karyn gye 
    let newcollection = products.slice(1).slice(-8)
    console.log('NewCollection Fetched');
    res.send(newcollection)
    
})

// 12): EndPoints For "Popular in women section part"  hi cards aayen ge us mai
app.get('/popularinwomen' ,async(req ,res)=>{
  let products = await Product.find({category:'women'});
  let popular_in_women = products.slice(0,4)
  console.log("popular in women fetched!!");
  res.send(popular_in_women)
  
})

// 14): "auth-token" ko layn gye or us ko "user-id" mai convert karyn gye by using" middleware"
const fetchuser = async(req , res, next)=>{
    // now verify the auth-token using jwt and after that find the user
    const token = req.header('auth-token')
    // check the token
    if(!token){
        res.status(401).send({errors:'Plese authenticate using vaild token'})
    }
    // aagar token theek howa too token verify karooo and decoded using salt
    else{
        try{
            const data=jwt.verify(token,  process.env.JWT_SECRET)
            // data k under jo id store hai jo auth-token say aaye hai us ko req.user mai save karwa do 
            req.user=data.user;
            next();
        }catch(error){
    // aagar koi error aaye token mai  too ye message show hoga    
    res.status(401).send("Please authenticate using a valid token")
        }
    }



}


// 13): Creating EndPoints to add the product in cartdata
app.post('/addtocart',fetchuser ,async(req, res)=>{
    console.log("Added" , req.body.itemId);
    
    // just return itemId in console {itemid ki koi "id" bhi hogi to wo req.user mai save hogi}
    // console.log(req.body, req.user);
    let userdata= await Users.findOne({_id:req.user.id});
    userdata.cartData[req.body.itemId] +=1 ;
    // save the updates in mongodb "jo cartdata mai itemid store krna "
    await Users.findOneAndUpdate({_id:req.user.id},
        {cartData:userdata.cartData}); 
    res.send("Added")

})

// 14): Creating EndPoints to remove the product from the cartdata

app.post('/removefromcart',fetchuser ,async(req,res)=>{

    console.log("remove" , req.body.itemId);
    
 // exact same plane as addtocart but cartdata k under is id ko remove karna hai 

    let userdata= await Users.findOne({_id:req.user.id});
   if(userdata.cartData[req.body.itemId]>0)
    { userdata.cartData[req.body.itemId] -=1} 
    // save the updates in mongodb "jo cartdata mai itemid store krna "
    await Users.findOneAndUpdate({_id:req.user.id},
        {cartData:userdata.cartData}); 
    res.send("Remove")
})


// 15): creating EndPoints for the person who are login(to addtocart wali functionaliy wahin say starthogi like aagar aapke cart mai to product hai aak hi email say to wo cart k upper 2 mension hioiwa wa hoga or aagar logout karo gye too cart pr zero likha howa aajye ga)

app.post('/getcart',fetchuser,async(req , res)=>{
let userdata = await Users.findOne({_id: req.user.id})
res.json(userdata.cartData);
})

//3): For Server Running At:
app.listen(port, (error) => {
    if(!error)
    {
         console.log(`Server running at http://localhost:${port}`);
    }
    else{
        console.log('error is '+ error);
        
    }
 
});














