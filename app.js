import showcaseRoutes from './api/routes/showcaseRoutes';
import cartRoutes from './api/routes/cartRoutes';

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/showcase', showcaseRoutes);
app.use('/api/cart', cartRoutes);

module.exports = app;