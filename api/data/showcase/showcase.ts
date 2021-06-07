import allProducts from '../products/all_products';
import morePointsProducts from '../products/more_points_products';
import offerProduct from '../products/offer_product';
import { v4 as uuid } from 'uuid';

const showcase = {
  "banners": [
    {
      "id": uuid(),
      "bannerUrl": "https://i.imgur.com/u6NDGqx.png"
    },
    {
      "id": uuid(),
      "bannerUrl": "https://i.imgur.com/u6NDGqx.png"
    },
    {
      "id": uuid(),
      "bannerUrl": "https://i.imgur.com/u6NDGqx.png"
    }
  ],
  "categorizedProducts": [
    {
      "category": "Brand New",
      "products": [
        ...allProducts
      ]
    },
    {
      "category": "More Points",
      "products": [
        ...morePointsProducts
      ]
    }
  ],
  "offers": [
    {
      "product": offerProduct,
      "startDate": "2021-05-27",
      "endDate": "2021-05-28"
    }
  ]
}

export default showcase;
