import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryMethodPatternComponent } from './factory-method-pattern.component';

describe('FactoryMethodPatternComponent', () => {
  let component: FactoryMethodPatternComponent;
  let fixture: ComponentFixture<FactoryMethodPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryMethodPatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryMethodPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
