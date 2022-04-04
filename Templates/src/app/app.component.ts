import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Templates';
  test = 'TEST';
  test2 = 'TEST2';
  names = ['VAsa', 'SAHa', 'KTo', '4to'];
  sayHello = true;
}
