import express from 'express';
import bodyParser from 'body-parser';
import marked from 'marked';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  console.log('Received body:', req.body);

  // Make the vulnerable 'marked' package reachable:
//   const markdown = marked(req.body.input);

  res.json({ output: markdown });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
