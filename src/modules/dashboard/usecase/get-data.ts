export interface DataInfo {
  action: string;
  metaData: OrderInfo;
}

export interface OrderInfo {
  key: string;
  value: string | number | boolean | any;
}

export interface DataResponse {
  action: string;
  metaData: {
    key: string;
    value: number;
  };
}
