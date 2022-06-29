/* Order Class Model for the GUI and Ag-Grid*/
export class OrderModel {
  orderId: number;
  orderType: string;
  textileType: string;
  entryTime: number;
  status: string;
  amount: string;
  customerName: string;


  constructor(orderId: number, orderType: string, textileType: string, entryTime: number, status: string, amount: string, customerName: string) {
    this.orderId = orderId;
    this.orderType = orderType;
    this.textileType = textileType;
    this.entryTime = entryTime;
    this.status = status;
    this.amount = amount;
    this.customerName = customerName;
  }
}

/* Order Class Model of Rest data */
export class OrderRestModel {
  orderId: number;
  orderType: string;
  textileType: string;
  entryTime: number;
  orderStatus: string;
  orderAmount: string;
  customerName: string;

  constructor(orderId: number, orderType: string, textileType: string, entryTime: number, orderStatus: string, orderAmount: string, customerName: string) {
    this.orderId = orderId;
    this.orderType = orderType;
    this.textileType = textileType;
    this.entryTime = entryTime;
    this.orderStatus = orderStatus;
    this.orderAmount = orderAmount;
    this.customerName = customerName;
  }
}

/* Enumerations for the header field of the Ag-Grid */
export enum ORDER_HEADERS {
  OID = 'orderId',
  ORDERTYPE = 'orderType',
  TEXTILETYPE = 'textileType',
  ENTRYTIME = 'entryTime',
  STATUS = 'orderStatus',
  AMOUNT =  'orderAmount',
  CUSTOMERNAME = 'customerName',
  EDIT = 'editButton',
  DELETE = 'deleteButton'
}
