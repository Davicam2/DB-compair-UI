import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionStringModalComponent } from './connection-string-modal.component';

describe('ConnectionStringModalComponent', () => {
  let component: ConnectionStringModalComponent;
  let fixture: ComponentFixture<ConnectionStringModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionStringModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionStringModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
