import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaraComponent } from './bara.component';

describe('BaraComponent', () => {
  let component: BaraComponent;
  let fixture: ComponentFixture<BaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
