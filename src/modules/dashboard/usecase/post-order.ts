export interface OrderDto {
  key: string;
  metaData: {
    campaignName: string;
    price: number;
    phone: string;
    paymentChanel: string;
  };
}

export interface OrderRequset {
  key: string;
  metaData: {
    campaignName: string;
    price: number;
    phone: string;
    paymentChanel: string;
  };
}

export interface OrderResponse {
  status: string;
  campaign: string;
}
