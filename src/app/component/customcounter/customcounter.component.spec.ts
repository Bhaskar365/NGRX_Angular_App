import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcounterComponent } from './customcounter.component';

describe('CustomcounterComponent', () => {
  let component: CustomcounterComponent;
  let fixture: ComponentFixture<CustomcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomcounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
