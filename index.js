// require('dotenv').config()
// const express = require('express');
// const cors = require('cors');
// // const jwt = require('jsonwebtoken');
// // const cookieParser = require('cookie-parser')
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const app = express();
// const port = process.env.PORt || 5000;


// app.use(cors())
// app.use(express.json())

// // mongodb connection 


// // const verifyToken=(req,res,next)=>{
// //   const token=req?.cookies?.token
// //   if(!token){
// //     return res.send({massage:'unothoris'})
// //   }
// //   jwt.verify(token,'AD42AEEC73759E8F49FD2B96FF936B0C1D920B5B3D3E6E769281928EB538D1C2',(err,decode)=>{
// //     if(err){
// //       return res.send({massage:'again login'})
// //     }
// //     req.user=decode
// //     next()
// //   })
  
// // }


// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.w81iv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// console.log(process.env.DB_PASS)
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     const database = client.db("rentcar");
//     const carsCollections = database.collection("all_cars");
//     const watchlistCollections = database.collection("watchlist");


    

//     app.get('/allcars', async (req, res) => {
//       const curser = carsCollections.find()
//       const result = await curser.toArray()
//       res.send(result)

//     })
//     app.get("/car/:carId", async (req, res) => {
      
//         const carId = req.params.carId;
        
//         const query = { _id:new ObjectId(carId) };
//         const result = await carsCollections.findOne(query);
        
//         res.send(result)
        
//     });
//     app.get('/watchlist', async (req, res) => {
//       const curser = watchlistCollections.find()
      
//       const result = await curser.toArray()
//       console.log(result)
//       res.send(result)

//     })
    
//     app.post('/watchlist', async (req, res) => {
//       const data = req.body
//       const result = await watchlistCollections.insertOne(data)
//       res.send(result)

//     })
//     app.post("/addcars", async (req, res) => {
//       const review = req.body;
      
//       const result = await carsCollections.insertOne(review);
//       res.send(result);
//     });





//     app.delete('/car/:id', async (req, res) => {
//       const { id } = req.params;
//       const query = { _id: new ObjectId(id) }
//       const result = await carsCollections.deleteOne(query)
//       res.send(result)

//     })
//     app.delete('/deletewatch/:id', async (req, res) => {
//       const { id } = req.params;
//       const query = { _id: new ObjectId(id) }
//       const result = await watchlistCollections.deleteOne(query)
//       res.send(result)

//     })
//     app.put('/update/:id',async(req,res)=>{
//       const id=req.params.id
//       const filter={_id:new ObjectId(id)}
//       const options = { upsert: true };
//       const reqData=req.body;
//       console.log(reqData)
//       const updateDoc = {
        
//         $set: {
//           carModel:reqData.carModel,
//           dailyRentalPrice:reqData.dailyRentalPrice,
//           availability:reqData.availability,
//           vehicleRegistrationNumber:reqData.vehicleRegistrationNumber,
//           description:reqData.description,
//           imageUrl:reqData.imageUrl,
//           location:reqData.location,
//           userEmail:reqData.userEmail,
//           userName:reqData.userName,
//         },                  
//       };
//       const result=await carsCollections.updateOne(filter,updateDoc,options)
//       res.send(result)
//     })
//     // Connect the client to the server	(optional starting in v4.7)
//     // await client.connect();
//     // Send a ping to confirm a successful connection
//     // await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);



// app.get('/', (req, res) => {
//   res.send("This is Rent car Server")
// })

// app.listen(port, () => {
//   console.log(`server is running ${port}`)
// })
