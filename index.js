const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000

const categories = require('./Data/categories.json');

app.get('/', (req, res) => {
    res.send('Dragon is comming')
})

app.use(cors());

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`The Dragon news is running on port: ${port}`)
})