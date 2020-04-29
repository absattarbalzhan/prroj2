import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySpecialistsComponent } from './my-specialists.component';

describe('MySpecialistsComponent', () => {
  let component: MySpecialistsComponent;
  let fixture: ComponentFixture<MySpecialistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySpecialistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySpecialistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
