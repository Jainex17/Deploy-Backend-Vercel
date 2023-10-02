const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
app.use(cors({
    origin: 'https://deploy-vercel-inky.vercel.app/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then((data)=>{
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        })
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

dbConnect();

const userRoute = require('./routes/userRoute');
app.use('/api/v1', userRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`backend listening at http://localhost:${port}`);
});