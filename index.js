require('dotenv').config()
const express = require("express")
const app = express();
var router = express.Router();
const cors = require('cors');
const approute = require('./Routes/appRoutes')(router);
var PORT = process.env.PORT 
require('./Config/Database')

// allow origin to access the data
app.use(cors({ origin: "*" }));

// allow header
app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

   res.header(
       'Access-Control-Expose-Headers',
       'x-access-token, x-refresh-token'
   );

   next();
});

// url data encoding 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// access api end point start to /api 
app.use('/api', approute);


app.listen(PORT, function (error) {
   if (error) throw error
   console.log(" Server Up Successfully on PORT :" + PORT)
   console.log('====================================');
   console.log("http://localhost:8080");
   console.log('====================================');
})