import express, { Request, Response } from 'express';
import cors from 'cors';
import process from 'process'

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000

// Middleware
app.use(cors());          // Enable Cross-Origin Resource Sharing
app.use(express.json());  // Parse incoming JSON requests

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello there');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});