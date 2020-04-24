import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MCGridComponent } from './mc-grid.component';

describe('MCGridComponent', () => {
  let component: MCGridComponent;
  let fixture: ComponentFixture<MCGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MCGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MCGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
