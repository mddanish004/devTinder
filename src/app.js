const express = require('express')
const app = express()
const port = 3000

app.use('/user',
   (req,res, next)=>{
    // res.send("Route handler 1: "); 
    console.log("Handling the route");
     
    next();
},
(req,res) =>{
  console.log("Handling the route 2");
  res.send("Response 2");
}
);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})