import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModules } from './heroes/heroes.module';
import { ContadorModules } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  //agregue el HeroesModules, que lo saque como mudulo propio
  imports: [
    BrowserModule,
    HeroesModules,
    ContadorModules,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
