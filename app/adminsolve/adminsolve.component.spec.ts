import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsolveComponent } from './adminsolve.component';

describe('AdminsolveComponent', () => {
  let component: AdminsolveComponent;
  let fixture: ComponentFixture<AdminsolveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsolveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
