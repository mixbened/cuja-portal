const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// serve index.html on app start
app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json());

// ENDPOINTS
app.post('/test', (req, res) => {
  console.log(req.body)
  res.status(200).send(req.body.info)
})

// deployment
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

// start application
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App is rocking on Port ${PORT}`);
});