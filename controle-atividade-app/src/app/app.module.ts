import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AloMundoComponent } from './alo-mundo/alo-mundo.component';
import { TipoAtividadeComponent } from './tipo-atividade/tipo-atividade.component';

@NgModule({
  declarations: [
    AppComponent,
    AloMundoComponent,
    TipoAtividadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
