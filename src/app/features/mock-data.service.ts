import { Injectable } from '@angular/core';
import { ColumnSetting } from '../shared/mc-grid/column-setting';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

   list :any = [
    { date: '2020-04-16T10:39:54', name: 'Chandan', id: 20055 },
    { date: '2020-08-16T10:39:54', name: 'John', id: 20053 },
    { date: '2020-05-16T10:39:54', name: 'Micheal', id: 45652 },
    { date: '2020-04-16T10:39:54', name: 'Chandan', id: 20055 },
    { date: '2020-08-16T10:39:54', name: 'John', id: 20053 },
    { date: '2020-04-16T10:39:54', name: 'Chandan', id: 20055 },
    { date: '2020-08-16T10:39:54', name: 'John', id: 20053 },
    { date: '2020-04-16T10:39:54', name: 'Chandan', id: 20055 },
    { date: '2020-08-16T10:39:54', name: 'John', id: 20053 },
    { date: '2020-04-16T10:39:54', name: 'Chandan', id: 20055 },
    { date: '2020-08-16T10:39:54', name: 'John', id: 20053 },
    { date: '2020-04-16T10:39:54', name: 'Chandan', id: 20055 },
   
];


 public columnName: ColumnSetting[] = [
    {
        field: 'name',
        title: 'Name',
        type: 'text'
    },      

    {
        field: 'id',
        title: 'Employee ID',
        type: 'text'
    },
    {
        field: 'date',
        format: '{0:MM/dd/yyyy}',
        title: 'Joining Date',
        type: 'date'
    },
    
    

   
];

  getColumns():ColumnSetting[]{
    return this.columnName;
  }

  getData(){
    return this.list;
  }
}
