const express = require('express')
const app = express()
const port = 3000

app.delete('/user', (req,res)=>{
    res.send("Deleted successfully");
})
app.get('/user', (req,res)=>{
    res.send({firstname: "Md Danish", lastname: "Ansari"});
})

app.post('/user', (req, res)=>{
    
    res.send("Data successfully daved to the database");
})



app.get('/contact', (req, res) => {
  res.send('Phone number')
});

app.use((req,res)=>{
    res.send("Assalam Alaikum from the server!");
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})