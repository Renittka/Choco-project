import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlinkComponent } from './orderlink.component';

describe('OrderlinkComponent', () => {
  let component: OrderlinkComponent;
  let fixture: ComponentFixture<OrderlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
