import { Component, Input, OnInit } from '@angular/core';
import { TableDataComponent } from '../table-data/table-data.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BeService } from '../services/be.service';

export interface Invoice {
  date: string,
  amount: number,
  id: number
}
@Component({
  selector: 'app-customer-invoices',
  standalone: true,
  imports: [TableDataComponent],
  templateUrl: './customer-invoices.component.html',
  styleUrl: './customer-invoices.component.css'
})
export class CustomerInvoicesComponent implements OnInit {
  constructor(private router: Router, private activeRoute: ActivatedRoute,private be:BeService){}
  customer_id:number| undefined;
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.customer_id=parseInt(params['id'])
      console.log(this.customer_id);
      
      if(!isNaN(this.customer_id)){
      this.invoices = this.invoices.filter(i => i.id === this.customer_id);
      }
    });
   
  }
  
  invoices: Invoice[] = this.be.GetInvoices()
  proporites: string[]=["date", "amount"];
  table_headers: string[] = ["Date", "Amount"];

}
