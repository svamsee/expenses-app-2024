import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBankAccountsComponent } from './manage-bank-accounts.component';

describe('ManageBankAccountsComponent', () => {
  let component: ManageBankAccountsComponent;
  let fixture: ComponentFixture<ManageBankAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageBankAccountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageBankAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
