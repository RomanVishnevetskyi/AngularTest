import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { MyngIfDirective } from './directives/myng-if.directive';

@NgModule({
  declarations: [AppComponent, ChildComponent, MyngIfDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
