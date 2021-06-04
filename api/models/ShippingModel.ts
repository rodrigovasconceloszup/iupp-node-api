
interface ShippingModelDTO {
  cep: String;
  expectedDeliveryDays: number;
  value: number;
}
class ShippingModel {
  cep: String;
  expectedDeliveryDays: number;
  value: number;

  constructor({cep, expectedDeliveryDays, value}: ShippingModelDTO) {
    this.cep = cep;
    this.expectedDeliveryDays = expectedDeliveryDays;
    this.value = value;
  }
}

export default ShippingModel;
