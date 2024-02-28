export interface OrderDto {
  action: string;
  metaData: {
    key: string;
    value: string | number | boolean | any;
  };
}

export interface OrderRequset {
  action: string;
  metaData: {
    key: string;
    value: string | number | boolean | any;
  };
}

export interface OrderResponse {
  status: string;
  action: string;
}
