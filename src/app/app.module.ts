import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './grid/grid.component';
import { GridWithTransactionsComponent } from './grid/grid-transaction.component';
import { IgxGridModule, IgxFocusModule, IgxButtonModule, IgxDialogModule, IgxRippleModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridComponent,
    GridWithTransactionsComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxFocusModule,
    IgxButtonModule,
    IgxDialogModule,
    IgxRippleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
