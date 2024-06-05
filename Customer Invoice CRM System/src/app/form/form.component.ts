import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { BeService } from '../services/be.service';
import { Invoice } from '../customer-invoices/customer-invoices.component';

export interface Customer {
  id: number,
  name: string,
  email: string,
  phone: string
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private be: BeService) {}
  toAdd = new FormGroup({
    date: new FormControl(''),
    amount: new FormControl(''),
    id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
});
filtered: Customer[] = [];

  AddFunc(){
    this.SaveCustomer()
    this.SaveInvoice()
    this.toAdd.reset()
  }

  SaveCustomer(){
    const customer: Customer = {id: parseInt(this.toAdd.value.id!), name: this.toAdd.value.name!, email: this.toAdd.value.email!, phone: this.toAdd.value.phone!}
    this.be.addCustomer(customer)
  }
  SaveInvoice(){
    const invoice = {date: this.toAdd.value.date, amount: this.toAdd.value.amount, id: this.toAdd.value.id}
    this.be.addInvoice(invoice)
    this.printCustomers( this.be.GetInvoices(),this.toAdd.value.id)
}

  printCustomers(invoices: Invoice[],id:any) {
    console.log(`the invoices for ${id}`);
    
    const filteredInvoices = invoices.filter(invoice => invoice.id === id);
    filteredInvoices.forEach((invoice, index) => {
    console.log(`Date: ${invoice.date}`);
    console.log(`Amount: ${invoice.amount}`);
});
        
        console.log("-------------------");
  }

  search(){
    this.filtered = this.be.GetCustomers().filter(c => c.id.toString().includes(this.toAdd.controls.id.value?.toString() ?? '')) 
  }
  fillDetails(item: Customer){
    this.toAdd.controls.id.setValue(item.id.toString())
    this.toAdd.controls.name.setValue(item.name)
    this.toAdd.controls.phone.setValue(item.phone)
    this.toAdd.controls.email.setValue(item.email)
  }
}
