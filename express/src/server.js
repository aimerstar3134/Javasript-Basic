import http from 'http';
import dotenv from 'dotenv';
import app from './app.js';
import db from './config/db.js';

dotenv.config();
db();

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}/`);
});
