import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SumadorComponent } from './sumador/sumador.component';
import { RestadorComponent } from './restador/restador.component';
import { DivisorComponent } from './divisor/divisor.component';
import { MultiplicadorComponent } from './multiplicador/multiplicador.component';

@NgModule({
  declarations: [
    AppComponent,
    SumadorComponent,
    RestadorComponent,
    DivisorComponent,
    MultiplicadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
