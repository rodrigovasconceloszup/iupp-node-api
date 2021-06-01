import { Router } from 'express';
import showcaseRoutes from '../routes/showcaseRoutes';
import cartRoutes from '../routes/cartRoutes';

const routes = Router();

routes.use('/api/showcase', showcaseRoutes);
routes.use('/api/cart', cartRoutes);

export default routes;
