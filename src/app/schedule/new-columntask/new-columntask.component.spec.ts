import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewColumntaskComponent } from './new-columntask.component';

describe('NewColumntaskComponent', () => {
  let component: NewColumntaskComponent;
  let fixture: ComponentFixture<NewColumntaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewColumntaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewColumntaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
