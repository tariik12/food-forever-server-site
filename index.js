const express =require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const lotti_cooking = require('./data/lotti_cooking.json')

app.use(cors())

app.get('/', (req, res) =>{
    res.send('Food Forever is running')
});
app.get('/lotti', (req, res) =>{
    res.send(lotti_cooking)
});

app.listen(port,() => {
    console.log(`Food Forever is running on port :${port}`)
})