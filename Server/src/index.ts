import express, { Request, Response } from 'express';
import cors from 'cors';
import sequelize from './infrastructure/database';

import UserRoutes from './presentation/routes/UserRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000

// Middleware
app.use(cors());          // Enable Cross-Origin Resource Sharing
app.use(express.json());  // Parse incoming JSON requests

// Routes
app.get('/', (req: Request, res: Response) => {
    res.send('Hello there');
});
app.use('/users', UserRoutes);

// Start the server
async function startServer() {
    sequelize
        .authenticate()
        .then(() => console.log('Successfully connected to the database!'))
        .catch((error: Error) => console.log('Failed to connect the database:', error));

    sequelize.sync().then(() => {
        console.log('Database synchronized');
    }).catch((err: Error) => {
        console.error('Failed to synchronize database:', err);
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();