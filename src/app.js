const express = require('express')
const app = express()
const port = 3000

app.get('/contact', (req, res) => {
  res.send('Phone number')
});

app.use((req,res)=>{
    res.send("Assalam Alaikum from the server!");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})