import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {OrderComponent} from "./components/order/order.component";

const appRoutes: Routes = [
  {path:'', component: OrderComponent},
  {path:'orders', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
