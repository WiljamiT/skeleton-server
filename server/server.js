//import config from './../config/config.js'
import app from './express.js'
import dotenv from 'dotenv';

import mongoose from 'mongoose'
dotenv.config();

const PORT = process.env.PORT || 6001;

mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGO_URL, { 
  useNewUrlParser: true, 
  // useCreateIndex: true,         
  useUnifiedTopology: true } ).then(() => {
    app.listen(PORT, () => console.log(`Server running: ${PORT}`));
}).catch((error) => console.log(`mongoose ${error}`));