import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationDisplayComponent } from './communication-display.component';

describe('CommunicationDisplayComponent', () => {
  let component: CommunicationDisplayComponent;
  let fixture: ComponentFixture<CommunicationDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
