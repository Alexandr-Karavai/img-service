import {Component, Input } from '@angular/core';


@Component({
  selector: 'user-app',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user;
  isMarker = false;

  onClick() {
    this.isMarker = true;
  }
}
