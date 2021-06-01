import ProductModel from 'models/ProductModel';
import brandNewProducts from './brand_new_products';
import morePointsProducts from './more_points_products';
import offerProduct from './offer_product';

const allProducts = [
    ...brandNewProducts,
    ...morePointsProducts,
    offerProduct,
] as Array<ProductModel>;


export default allProducts;
