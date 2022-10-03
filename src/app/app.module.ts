import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostbindingComponent } from './components/hostbinding/hostbinding.component';
import { StylesDirective } from './directives/styles.directive';

@NgModule({
  declarations: [
    AppComponent,
    HostbindingComponent,
    StylesDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
