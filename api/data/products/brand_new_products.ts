import ProductModel from 'models/ProductModel';
import { v4 as uuid } from 'uuid';

const brandNewProducts = [
  {
    "id": uuid(),
    "description": "Notebook Samsung, Intel® Core™ i7 10510U, 16GB, 1TB + 128GB SS",
    "sku": "sku",
    "sellerName": "Magazine Luiza",
    "price": 2999,
    "fakePrice": 3499,
    "discount": 10,
    "points": 3000,
    "installments": [
      {
        "number": 12,
        "value": 541.58
      }
    ],
    "variations": [
      {
        "name": "Memória interna",
        "value": "128 GB",
        "products": []
      },
      {
        "name": "Cor",
        "value": "Azul",
        "products": []
      }
    ],
    "imageUrls": [
      "https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1672057574",
      "https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1672057752",
      "https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1672057955",
      "https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1672058143"
    ]
  },
  {
    "id": uuid(),
    "imageUrls": [
      "https://i.imgur.com/AQAuknv.png",
      "https://i.imgur.com/AQAuknv.png",
      "https://i.imgur.com/AQAuknv.png",
      "https://i.imgur.com/AQAuknv.png",
      "https://i.imgur.com/AQAuknv.png",
      "https://i.imgur.com/AQAuknv.png"
    ],
    "description": "Cafeteira Nespresso Combo Essenza Mini Vermelho para Café",
    "sku": "sku",
    "sellerName": "Magazine Luiza",
    "price": 499,
    "fakePrice": 549,
    "discount": 20,
    "points": 500,
    "installments": [
      {
        "number": 2,
        "value": 250
      }
    ],
    "variations": []
  },
  {
    "id": uuid(),
    "imageUrls": [
      "https://i.imgur.com/9M79TvP.png",
      "https://i.imgur.com/9M79TvP.png",
      "https://i.imgur.com/9M79TvP.png",
      "https://i.imgur.com/9M79TvP.png",
      "https://i.imgur.com/9M79TvP.png",
      "https://i.imgur.com/9M79TvP.png"
    ],
    "description": "Samsung Smart TV QLED 4K Q70T 55', Pontos Quânticos",
    "sku": "sku",
    "sellerName": "Magazine Luiza",
    "price": 1899,
    "fakePrice": 2499,
    "discount": 12,
    "points": 1900,
    "installments": [
      {
        "number": 1,
        "value": 1.899
      }
    ],
    "variations": []
  }
] as Array<ProductModel>;

export default brandNewProducts;
