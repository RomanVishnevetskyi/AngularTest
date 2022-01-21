import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  title = 'My Card Title';
  name = '';
  _surname = '';

  set surname(surname: string) {
    if (surname === '') {
      this._surname = 'Petrovi4';
    } else this._surname = surname;
  }
  get surname() {
    return this._surname;
  }

  disabled = false;
  inputValue = '';
  toggle = true;

  constructor() {}

  changeInput(event: any) {
    this.inputValue = event.target.value;
  }

  disabledButton() {
    setTimeout(() => {
      this.disabled = true;
      console.log('CLick');
    }, 3000);
  }
  activButton() {
    this.disabled = false;
  }
  changeStyle() {
    this.toggle = !this.toggle;
  }

  ngOnInit() {}
}
