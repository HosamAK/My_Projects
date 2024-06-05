import {Component, Input, OnInit, input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";


export interface Worker {
  name: string;
  phone: string;
  address: string;
}

export interface Customer {
  id: number,
  name: string,
  email: string,
  phone: string
}

@Component({
  selector: 'app-worker',
  standalone: true,
  imports: [],
  templateUrl: './worker.component.html',
  styleUrl: './worker.component.css'
})

export class WorkerComponent implements OnInit{
  @Input() table_headers: string[] = [];
  @Input() Custmrrrrs: any[] = [];
  @Input() proporites: string[]=[];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
//   @Input() name: string="";
//   @Input() phone: string="";
//   @Input() address: string="";
//  id :string="";
//  worker: Worker = { name: '',phone: '',address: ''};
//  All_workers: Worker []=[];
//  constructor(private route:ActivatedRoute) {
//  }
//  saveWorker() {
//   const new_worker: Worker = {
//     name: this.worker.name,
//     phone: this.worker.phone,
//     address: this.worker.address
//   };
//   this.All_workers.push(new_worker);
//   //reset
//   this.worker = { name: '', phone: '', address: '' };
// }

//  ngOnInit(){
//    this.id=this.route.snapshot.paramMap.get('id') ?? "";
//    console.log(this.id)

//  }


  customers: Customer[] = [{id: 1, name: "Fahed", email: "skdhgjksdg", phone: "1234"},
                           {id: 2, name: "Fahed", email: "skdhgjksdg", phone: "1234"}];

}
