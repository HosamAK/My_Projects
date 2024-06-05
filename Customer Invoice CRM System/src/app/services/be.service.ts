import { Injectable } from '@angular/core';
import { Customer } from '../customers/customer-list/customer-list.component';
import { Invoice } from '../customer-invoices/customer-invoices.component';

@Injectable({
  providedIn: 'root'
})
export class BeService {
  customers: Customer[]=[];

  invoices: Invoice[]=[];

  constructor() { }

  addCustomer(customer: Customer)  { 
    console.log(customer);
    
    const exist = this.customers.find(c => c.id === customer.id);
    if (exist) {
      exist.name = customer.name;
      exist.email = customer.email;
      exist.phone = customer.phone;
    } else {
      this.customers.push(customer) 
    }
    }

  GetCustomers() { return this.customers }

  UpdateCustomers() {}

  DeleteCustomers(id:number)  { this.customers= this.customers.filter(customer => customer.id !== id) }


  addInvoice(invoice: any)  { this.invoices.push(invoice)
    console.log(this.invoices)}

  GetInvoices() {  return this.invoices  }

  DeleteInvoice(id:number) { this.invoices=this.invoices.filter(inv=>inv.id!==id)  }

  UpdateInvoices() {}
}
