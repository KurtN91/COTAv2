import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesideComponent } from './stateside.component';

describe('StatesideComponent', () => {
  let component: StatesideComponent;
  let fixture: ComponentFixture<StatesideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatesideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
