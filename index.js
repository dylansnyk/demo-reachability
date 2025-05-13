import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  console.log('Received body:', req.body);

  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
