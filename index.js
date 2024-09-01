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
// app.use(cors());
const corsOptions = {
    origin: ['http://www.farmerlegacybiotech.com', 'https://farmerlegacybiotech.com','https://tobereviewed-2-lg1d.vercel.app/'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  };
  
  app.use(cors(corsOptions));

app.use('/static', express.static(path.join(__dirname, 'images')));

// Use routers
app.use(queryRouter);
app.use(qRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
