const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const cors = require('cors');
const queryRouter = require('./routers/queryrouter');
const qRouter = require('./routers/qrouter');
const app = express();
const port = 4000;

// Middleware setup

app.use(bodyParser.json());
// app.use(cors());






const corsOptions = {
    origin: ['http://www.farmerlegacybiotech.com', 'https://farmerlegacybiotech.com','https://tobereviewed-2-lg1d.vercel.app/'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  };
  
const allowedOrigins = ['http://www.farmerlegacybiotech.com', 'https://farmerlegacybiotech.com', 'https://tobereviewed-2-lg1d.vercel.app'];
// middleware
app.use((req, res, next) => {
    const origin = req.get('Origin');
    if (allowedOrigins.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204); // Respond successfully to OPTIONS request
    }
    next();
});



// same as above but bit advanced
// const allowedOrigins = [
//     'http://www.farmerlegacybiotech.com',
//     'https://farmerlegacybiotech.com',
//     'https://tobereviewed-2-lg1d.vercel.app'
// ];

// const corsOptions = {
//     origin: (origin, callback) => {
//         if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     methods: ['GET', 'POST', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true
// };

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));














app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'images')));

// Use routers
app.use(queryRouter);
app.use(qRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
