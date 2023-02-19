import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentTwoChildComponent } from './component-two-child/component-two-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentTwoChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
