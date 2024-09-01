const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const cors = require('cors');
const queryRouter = require('./routers/queryrouter');
const qRouter = require('./routers/qrouter');
const app = express();
const port = 4000;

// Middleware setup
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
// app.use(cors({
//     origin: 'https://farmerlegacybiotech.com' 
// }));

app.use('/static', express.static(path.join(__dirname, 'images')));

// Use routers
app.use(queryRouter);
app.use(qRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
