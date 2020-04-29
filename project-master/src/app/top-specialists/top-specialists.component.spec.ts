import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSpecialistsComponent } from './top-specialists.component';

describe('TopSpecialistsComponent', () => {
  let component: TopSpecialistsComponent;
  let fixture: ComponentFixture<TopSpecialistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSpecialistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSpecialistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
