import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {District} from '../../interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() districtList: District[] = [];
  @Input() tableHeaderColor = '';
  @Output() rowRemoved = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  public deleteRow(index: number): void {
    this.districtList.splice(index, 1);
    this.rowRemoved.emit(index);
  }
}
