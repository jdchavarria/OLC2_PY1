import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSimbolComponent } from './tabla-simbol.component';

describe('TablaSimbolComponent', () => {
  let component: TablaSimbolComponent;
  let fixture: ComponentFixture<TablaSimbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaSimbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaSimbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
