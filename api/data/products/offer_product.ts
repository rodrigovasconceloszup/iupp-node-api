import ProductModel from 'models/ProductModel';
import { v4 as uuid } from 'uuid';

const offerProduct = {
    "id": uuid(),
    "imageUrls": [
        "https://i.imgur.com/GnW62sE.png",
        "https://i.imgur.com/GnW62sE.png"
    ],
    "description": "iPhone 12 Azul, Tela de 6,1', 5 G, 128 GB, Câmera Dupla de 12 MP Ultra - angular + 12 MP",
    "sku": "sku",
    "sellerName": "Top Store",
    "price": 5999.2,
    "fakePrice": 6499,
    "discount": 11,
    "points": 2500,
    "installments": [
        {
            "number": 1,
            "value": 5999.2
        }
    ],
    "variations": []
} as ProductModel;

export default offerProduct;
