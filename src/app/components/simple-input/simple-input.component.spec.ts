import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleInputComponent } from './simple-input.component';

describe('SimpleInputComponent', () => {
  let component: SimpleInputComponent;
  let fixture: ComponentFixture<SimpleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
