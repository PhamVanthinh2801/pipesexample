import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() progress = 50;
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';

  constructor() {}

  ngOnInit() {
    console.log('Init', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('change', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }
}
