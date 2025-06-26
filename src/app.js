const express = require('express');
const cors    = require('cors');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // permite Postman e requests sem origin
    callback(null, origin); // aceita qualquer origem
  },
  credentials: true,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/api/profiles',     require('./routes/profileRoutes'));



app.use('/api/medicines',    require('./routes/medicineRoutes'));
app.use('/api/appointments', require('./routes/appointmentRoutes'));


module.exports = app;
