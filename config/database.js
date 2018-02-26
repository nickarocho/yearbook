const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.once('open', () => {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});