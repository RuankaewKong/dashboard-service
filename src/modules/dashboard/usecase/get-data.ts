export interface DataInfo {
  key: string;
  metaData: OrderInfo;
}

export interface OrderInfo {
  campaignName: string;
  price: number;
  phone: string;
  paymentChanel: string;
}

export interface DataResponse {
  key: string;
  metaData: {
    campaignName: string;
    price: number;
    phone: string;
    paymentChanel: string;
  };
}
// export interface DashboardResponse {
//   key: any;
// }
