import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  isDanger = false;
  isWaring = false;
  classes = 'box red-border yellow-background';
  currentProgress = 70;
}
