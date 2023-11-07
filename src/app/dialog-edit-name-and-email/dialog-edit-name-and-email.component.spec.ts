import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditNameAndEmailComponent } from './dialog-edit-name-and-email.component';

describe('DialogEditNameAndEmailComponent', () => {
  let component: DialogEditNameAndEmailComponent;
  let fixture: ComponentFixture<DialogEditNameAndEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogEditNameAndEmailComponent]
    });
    fixture = TestBed.createComponent(DialogEditNameAndEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
