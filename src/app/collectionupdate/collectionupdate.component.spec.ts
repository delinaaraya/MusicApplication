import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionupdateComponent } from './collectionupdate.component';

describe('CollectionupdateComponent', () => {
  let component: CollectionupdateComponent;
  let fixture: ComponentFixture<CollectionupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
