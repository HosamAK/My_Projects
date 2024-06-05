import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-data',
  standalone: true,
  imports: [],
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.css'
})
export class TableDataComponent implements OnInit {
  @Input() table_headers: string[] = [];
  @Input() table_data: any[] = [];
  @Output() row_clicked: EventEmitter<any> = new EventEmitter<any>();
  @Input() proporites: string[]=[];
  ngOnInit(): void {
  }
  UploadData(user_table:any){
   this.row_clicked.emit(user_table)
  }
}
