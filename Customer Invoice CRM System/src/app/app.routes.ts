import {provideRouter, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {WorkersComponent} from "./workers/workers.component";
import {WorkerComponent} from "./worker/worker.component";
import {ApplicationConfig} from "@angular/core";
import { TableDataComponent } from './table-data/table-data.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerInvoicesComponent } from './customer-invoices/customer-invoices.component';
import { FormComponent } from './form/form.component';

export const routes: Routes =
[
  {path: 'Workers', component: WorkersComponent},
  {path: 'Invoices/:id', component: CustomerInvoicesComponent},
  {path: 'Invoices', component: CustomerInvoicesComponent},
  {path: 'Customers', component: CustomerListComponent},
  {path: 'Create', component: FormComponent}

];
