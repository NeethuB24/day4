import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigledistComponent } from './sigledist.component';

describe('SigledistComponent', () => {
  let component: SigledistComponent;
  let fixture: ComponentFixture<SigledistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigledistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigledistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
