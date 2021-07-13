import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { GridComponent } from './grid.component';
import { GridWithTransactionsComponent } from './grid-transaction.component';
import {
    IgxButtonModule,
    IgxDialogModule,
    IgxFocusModule,
    IgxGridModule,
    IgxRippleModule
} from 'igniteui-angular';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridComponent, GridWithTransactionsComponent ],
      imports: [ FormsModule, NoopAnimationsModule, IgxDialogModule, IgxGridModule, IgxFocusModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
