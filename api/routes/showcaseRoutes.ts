import express from 'express';

import * as ShowcaseController from '../controllers/showcase';

const showcaseRoutes = express.Router();

showcaseRoutes.get('/', ShowcaseController.GET.getShowcaseByUserId);

export default showcaseRoutes;
