import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectioncreateComponent } from './collectioncreate.component';

describe('CollectioncreateComponent', () => {
  let component: CollectioncreateComponent;
  let fixture: ComponentFixture<CollectioncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectioncreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
