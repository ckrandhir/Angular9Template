import { Component, OnInit, EventEmitter, Output, Input, ViewEncapsulation, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { ColumnSetting } from './column-setting';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { DataSourceRequestState } from '@progress/kendo-data-query';

@Component({
  selector: 'app-mc-grid',
  templateUrl: './mc-grid.component.html',
  styleUrls: ['./mc-grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MCGridComponent implements OnInit ,AfterViewInit {


  @Input()loadingIndicator: boolean = false;

  @Input()  columns: ColumnSetting[];
  @Input() mcData :any;
  @Output() getData = new EventEmitter<any>();
  
  @ViewChild("excel") divView: ElementRef;

  constructor(private el: ElementRef,private renderer: Renderer2) { }
  ngAfterViewInit(): void {
    this.renderer.removeClass(this.divView.nativeElement, 'k-button');
  }

  ngOnInit(): void {

  }
  public state: DataSourceRequestState = {
    skip: 0,
    take: 14,
};

public mcStateChange(state: DataStateChangeEvent): void {
  this.state = state;

}

refreshGrid(){
    this.getData.next(0);
}

}
