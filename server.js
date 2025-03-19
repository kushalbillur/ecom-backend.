const express= require("express");
const cors=require("cors");
const connectDB = require("./config/db");
const router = require("./routes/authRoutes");
const cartrouter = require("./routes/cartRoutes");
connectDB()
const app= express();
const allowedOrigins = ["ecom-frontend-nizu0dm1p-kushal-bs-projects.vercel.app"
    ,"ecom-frontend-iota-weld.vercel.app"]
app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allows cookies and authentication headers if needed
  }))

app.use(express.json())


app.use("/auth",router)
app.use("/cart",cartrouter)
//middleware
app.get('/' , (req ,res)=>{
    res.send("hello world")
})

const port = 5000

app.listen(port, ()=>{
console.log(`server is running on port ${port}`)
}
)