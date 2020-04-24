import { Component, OnInit } from '@angular/core';
import { ColumnSetting } from 'src/app/shared/mc-grid/column-setting';
import { PayersService } from './payers.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-payers',
  templateUrl: './payers.component.html',
  styleUrls: ['./payers.component.scss']
})
export class PayersComponent implements OnInit {
  loadingIndicator: boolean;
  data: any;
  columns: ColumnSetting[];

  // Private
  private _unsubscribeAll: Subject<any>;


  constructor(private payersService: PayersService) { }

  ngOnInit(): void {

    this.columns = [
      {
        field: 'BusinessIdRx',
        title: 'Id',
        type: 'numeric'
      },
      {
        field: 'ClientName',
        title: 'Payer Name',
        type: 'text'
      },
      {
        field: 'CreatedDate',
        format: '{0:MM/dd/yyyy}',
        title: 'Created',
        type: 'date'
      },
      {
        field: 'AccountManagerName',
        format: '{0:MM/dd/yyyy}',
        title: 'RxA Account Manager',
        type: 'text'
      }
    ];

    this.loadData();

  }

  loadData() {
    // Subscribe to payers
    this.payersService.onPayersChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(data => {
        this.data = data;
      });

  }

  refreshData(event) {
    this.loadData();
  }

}
