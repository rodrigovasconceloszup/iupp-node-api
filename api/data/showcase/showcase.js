import allProducts from '../products/all_products';
import morePointsProducts from '../products/more_points_products';
import offerProduct from '../products/offer_product';

const showcase = {
    "banners": [
        {
            "id": 1,
            "bannerUrl": "https://i.imgur.com/u6NDGqx.png"
        },
        {
            "id": 2,
            "bannerUrl": "https://i.imgur.com/u6NDGqx.png"
        },
        {
            "id": 3,
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
