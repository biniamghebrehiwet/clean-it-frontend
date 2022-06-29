import {AfterViewInit, Component, OnInit} from '@angular/core';
import {createOrderColumnDefs, GRID_OPTIONS} from "./order.grid.constants";
import {RestService} from "../../services/restapi/rest.service";
import {OrderRestModel} from "../../models/order/order.model";
import {FormControl, Validators} from "@angular/forms";
import {debounceTime, switchMap} from "rxjs";
import {ColumnApi, GridApi, GridOptions} from "ag-grid-community";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['../../styles/order.component.css']
})
export class OrderComponent implements OnInit, AfterViewInit {

  /* Ag-Grid */
  gridApi: GridApi = new GridApi;
  gridColumnApi: ColumnApi = new ColumnApi;
  gridOptions: GridOptions = GRID_OPTIONS;

  /* Form Elements and Attributes */
  orderSearch = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern(/^[A-Za-z0-9\.\-\ \_\äöüßéàèÄÖÜÉÈÀ]+$/)]);

  /* Default Constructor */
  constructor(
    private restService: RestService
  ) {
  }

  /* Orders Grid (Table of content) */
  public initOrderGrid(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.setColumnDefs(createOrderColumnDefs());
    this.gridApi.sizeColumnsToFit();
  }

  /* Fill the Ag-Grid (Table) with the orders */
  public setOrderGrid() {
    this.restService.getAllOrders().subscribe(
      (response: Array<OrderRestModel>) => {
        this.gridApi.setRowData(response);
      }
    );
  }

  /* Set and update the data in the grid */
  public updateGridData(orderData: any) {
    this.gridApi.setRowData(orderData);
  }

  /* Search an order from the AG-Grid Order List */
  public searchOrderByStatus() {
      this.orderSearch.valueChanges.pipe(
        debounceTime(1500),
        switchMap(changedSearchValue => {
            return this.restService.searchAnOrder(changedSearchValue);
          }
        )
      ).subscribe((response: Array<OrderRestModel>) => {
        this.updateGridData(response);
      });
  }

  /* */
  ngOnInit(): void {
    this.searchOrderByStatus();
  }

  /* Filling the grid data after the component is viewed */
  ngAfterViewInit(): void {
    this.setOrderGrid();
  }


}
