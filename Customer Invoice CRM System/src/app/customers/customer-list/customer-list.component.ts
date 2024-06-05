import { Component, OnInit } from '@angular/core';
import { TableDataComponent } from '../../table-data/table-data.component';
import { Router } from '@angular/router';
import { BeService } from '../../services/be.service';


export interface Customer {
  id: number,
  name: string,
  email: string,
  phone: string,
}
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html' ,
  styleUrls: ['./customer-list.component.css'],   
  imports:[TableDataComponent],
  standalone: true,
})
export class CustomerListComponent implements OnInit {
  Custmrrrrs: Customer[] =this.be.GetCustomers()

  proporites: string[]=["id", "name", "email", "phone"];
  table_headers: string[] = ["ID", "NAME", "EMAIL", "PHONE"];

  constructor(private router: Router, private be:BeService ){}

  ngOnInit(): void {
  }
  onClick(event:any): void{
    this.router.navigate([`/Invoices/${event.id}`]);
  }
}