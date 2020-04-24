import { Component, OnInit } from '@angular/core';
import { ColumnSetting } from 'src/app/shared/mc-grid/column-setting';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loadingIndicator:boolean;
data:any;
 

  columnNames: ColumnSetting[] ;
    

  constructor(private _mockDataService:MockDataService) { }

  ngOnInit(): void {

    this.columnNames=this._mockDataService.getColumns();
    this.data=this._mockDataService.getData();
  }

  refreshData(event){
      
    this.data=this._mockDataService.getData();
     
  }

}
