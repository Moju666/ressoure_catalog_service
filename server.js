import express from 'express'; 
import resourcesRouter from './router/resources.js';


const port = 5002;

const app = express();

app.use(express.json());
app.use('/resoures', resourcesRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});