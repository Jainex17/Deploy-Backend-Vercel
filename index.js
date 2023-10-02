const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const dotenv = require('dotenv');
const dbConnect = require('./db_connect/database');

dotenv.config();
app.use(cors({
    // origin: 'https://deploy-vercel-inky.vercel.app/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();

const userRoute = require('./routes/userRoute');
app.use('/api/v1', userRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`backend listening at http://localhost:${port}`);
});