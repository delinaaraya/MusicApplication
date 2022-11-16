import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongcreateComponent } from './songcreate.component';

describe('SongcreateComponent', () => {
  let component: SongcreateComponent;
  let fixture: ComponentFixture<SongcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
