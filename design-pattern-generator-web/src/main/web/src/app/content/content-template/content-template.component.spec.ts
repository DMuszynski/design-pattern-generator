import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTemplateComponent } from './content-template.component';

describe('ContentTemplateComponent', () => {
  let component: ContentTemplateComponent;
  let fixture: ComponentFixture<ContentTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
