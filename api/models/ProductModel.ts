import InstalmentModel from "./InstamentModel";
import VariationModel from "./VariationModel";

class ProductModel {
  id: String;
  imageUrls: Array<String>;
  description: String;
  sku: String;
  sellerName: String;
  price: number;
  fakePrice: number;
  discount: number;
  points: number;
  installments: Array<InstalmentModel>;
  variations: Array<VariationModel>;
}

export default ProductModel;
