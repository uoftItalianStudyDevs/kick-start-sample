import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTempalteNameComponent } from './new-tempalte-name.component';

describe('NewTempalteNameComponent', () => {
  let component: NewTempalteNameComponent;
  let fixture: ComponentFixture<NewTempalteNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTempalteNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTempalteNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
