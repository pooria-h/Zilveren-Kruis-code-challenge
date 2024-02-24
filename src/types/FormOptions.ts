export interface BaseOption {
  value: string | number;
  name: string;
}

export type RequestType = BaseOption;
export type Gender = BaseOption;
export type PaymentTerm = BaseOption;
export type Deductible = BaseOption;
export type AdditionalInsurance = BaseOption;
export type DentalInsurance = BaseOption;

export interface BasicInsurancePlans extends BaseOption {
  price: string;
}
