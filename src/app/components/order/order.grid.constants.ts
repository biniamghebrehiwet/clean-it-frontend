import {ORDER_HEADERS} from "../../models/order/order.model";

/* Grid Options for the Ag-Grid */
export const GRID_OPTIONS = {
  enableSorting: true,
  enableFilter: true,
  floatingFilter: true,
  rowSelection: 'multiple',
  rowClassRules: {
    'ag-active-green': 'data.orderStatus == "closed"'
  }

};

/* Edit icon in grid */
export const EDIT_ACTIONS = ``;

/* Delete icon in grid  */
export const DELETE_ACTIONS = ``;

/* Create the columns in the grid */
export function createOrderColumnDefs(): Array<any> {
  return [
    {
      headerName: 'Order Id',
      field: ORDER_HEADERS.OID,
      unSortIcon: true,
      suppressMenu: true,
      suppressMovable: true,
      filter: '',
    },
    {
      headerName: 'Order Type',
      field: ORDER_HEADERS.ORDERTYPE,
      unSortIcon: true,
      suppressMenu: true,
      suppressMovable: true,
      filter: '',
    },
    {
      headerName: 'Textile Type',
      field: ORDER_HEADERS.TEXTILETYPE,
      unSortIcon: true,
      suppressMenu: true,
      suppressMovable: true,
      filter: '',
    },
    {
      headerName: 'Entry Time',
      field: ORDER_HEADERS.ENTRYTIME,
      unSortIcon: true,
      suppressMenu: true,
      suppressMovable: true,
      filter: '',
    },
    {
      headerName: 'Status',
      field: ORDER_HEADERS.STATUS,
      unSortIcon: true,
      suppressMenu: true,
      suppressMovable: true,
      filter: '',
    },
    {
      headerName: 'Amount in CHF',
      field: ORDER_HEADERS.AMOUNT,
      unSortIcon: true,
      suppressMenu: true,
      suppressMovable: true,
      filter: '',
    },
    {
      headerName: 'Customer Name',
      field: ORDER_HEADERS.CUSTOMERNAME,
      unSortIcon: true,
      suppressMenu: true,
      suppressMovable: true,
      filter: '',
    },
    {
      headerName: 'Edit',
      field: ORDER_HEADERS.EDIT,
      unSortIcon: true,
      suppressMenu: true,
      suppressMovable: true,
      filter: '',
      template: EDIT_ACTIONS
    },
    {
      headerName: 'Delete',
      field: ORDER_HEADERS.DELETE,
      unSortIcon: true,
      suppressMenu: true,
      suppressMovable: true,
      filter: '',
      template: DELETE_ACTIONS,
    }
  ]
}
