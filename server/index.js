import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import mongoose from 'mongoose';

const port = 4000;
const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`);
});
