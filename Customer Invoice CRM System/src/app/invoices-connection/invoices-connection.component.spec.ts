import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesConnectionComponent } from './invoices-connection.component';

describe('InvoicesConnectionComponent', () => {
  let component: InvoicesConnectionComponent;
  let fixture: ComponentFixture<InvoicesConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicesConnectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoicesConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
