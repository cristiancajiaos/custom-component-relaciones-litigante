import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { RelacionLitiganteComponent } from './shared/relacion-litigante/relacion-litigante.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RelacionLitiganteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
