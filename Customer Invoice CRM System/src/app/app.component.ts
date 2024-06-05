import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { TableComponent } from '../tutorials/table/table.component';
import { FormComponent } from './form/form.component';
import {WorkersComponent} from "./workers/workers.component";
import { WorkerComponent } from './worker/worker.component';
import { TableDataComponent } from './table-data/table-data.component';
import { CustomerInvoicesComponent, Invoice } from './customer-invoices/customer-invoices.component';
import { Customer, CustomerListComponent } from './customers/customer-list/customer-list.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, FormComponent, TableDataComponent, CustomerInvoicesComponent, CustomerInvoicesComponent,FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor( private router: Router) {
  }

  navigate(route: string) {
    this.router.navigate([`/${route}`]);
  }
  navigate2(route: string) {
    this.router.navigate([`/${route}`]);
    
  }
  navigate3(route: string) {
    this.router.navigate([`/${route}`]);
    
  }

}