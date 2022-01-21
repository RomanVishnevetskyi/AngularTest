import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { CounterComponent } from './counter/counter.component';
import { Counter1Component } from './counter1/counter1.component';
import { Counter2Component } from './counter2/counter2.component';
import { StyleDirective } from './directives/style.directive';
import { Counter3Component } from './counter3/counter3.component';

@NgModule({
  declarations: [AppComponent, CardComponent, PostComponent, PostFormComponent, CounterComponent, Counter1Component, Counter2Component, StyleDirective, Counter3Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
