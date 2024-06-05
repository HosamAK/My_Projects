import { Component, Input } from '@angular/core';
interface user {
  name: string;
  phoneNumber: string;
  address: string;
  age: number;
}
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() title = '';
  @Input() displayColumns:string[]=['Name','phoneNumber','Address','Age'];
  @Input() columns:string[]=['name','phoneNumber','address','age'];
  @Input() data:any[]=[{
    name: 'oday',
    phoneNumber: '0536666666',
    address: 'city d222',
    age: 15
  }, {
    name: 'oday',
    phoneNumber: '0536666666',
    address: 'city d222',
    age: 15
  }, {
    name: 'oday',
    phoneNumber: '0536666666',
    address: 'city d222',
    age: 15
  }];
}
