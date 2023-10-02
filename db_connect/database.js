const mongoose = require('mongoose');

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

module.exports = dbConnect;