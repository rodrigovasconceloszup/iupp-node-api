import showcaseRoutes from './api/routes/showcaseRoutes';
import cartRoutes from './api/routes/cartRoutes';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/showcase', showcaseRoutes);
app.use('/api/cart', cartRoutes);

module.exports = app;