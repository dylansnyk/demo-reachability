import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Use bodyParser middleware to parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handle POST requests to the root endpoint
app.post('/', (req, res) => {
  // Log the request body to the console (for debugging)
  console.log('Received body:', req.body);

  // Send the request body back as the response
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
