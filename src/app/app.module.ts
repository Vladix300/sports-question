import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponentComponent } from './components/display-component/display-component.component';
import { VoterComponentComponent } from './components/voter-component/voter-component.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { EnterComponent } from './components/enter-component/enter.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponentComponent,
    VoterComponentComponent,
    TestComponentComponent,
    EnterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
